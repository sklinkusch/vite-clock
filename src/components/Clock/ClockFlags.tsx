import Flag from './Flag';
import styles from './ClockFlags.module.css';

type Flag = {
  title: string | { title: string };
  subdiv: { title: string; extra: string }[];
  code: string;
};

type ClockFlagsProps = {
  flags: Flag[];
};

function getMultiTitle(flagTitle: string | { title: string }, flagSubdiv: { title: string; extra: string }[]) {
  if (flagSubdiv.length === 1) {
    const [subdiv] = flagSubdiv;
    const { title, extra = '' } = subdiv;
    const fTitle = typeof flagTitle === 'object' ? flagTitle.title : flagTitle;
    const Title = title;
    const Extra = extra || null;
    if (Extra) {
      return `${fTitle}: ${Title} ${Extra}`;
    } else {
      return `${fTitle}: ${Title}`;
    }
  } else {
    const modSubdiv = flagSubdiv.map((flag) => {
      const { title: ftitle, extra: fextra = '' } = flag;
      const Title = ftitle;
      const Extra = fextra || null;
      if (Extra) return { title: Title, extra: Extra };
      return { title: Title };
    });
    const sortedSubdiv = modSubdiv.sort((a, b) => a.title.localeCompare(b.title, 'de', { sensitivity: 'base' }));
    const text = sortedSubdiv
      .map((item) => (item.extra != null ? `${item.title} ${item.extra}` : `${item.title}`))
      .join(', ');
    const fTitle = flagTitle;
    return `${fTitle}: ${text}`;
  }
}

const ClockFlags = ({ flags }: ClockFlagsProps) => (
  <div>
    {flags &&
      Array.isArray(flags) &&
      flags.length > 0 &&
      flags.map((flag, index) => {
        const flagTitle = flag.subdiv.length > 0 ? getMultiTitle(flag.title, flag.subdiv) : flag.title;
        return <Flag key={index} code={flag.code} title={flagTitle} cn={styles.flag} />;
      })}
  </div>
);

export default ClockFlags;

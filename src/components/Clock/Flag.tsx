type Props = {
  code: string;
  title: string | { title: string };
  style?: any;
  cn?: string;
};

const Flag = ({ code, title, cn, ...attributes }: Props) => {
  const Title = typeof title === 'string' ? title : title.title;
  switch (code) {
    case 'AC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇨
        </span>
      );
    case 'AD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇩
        </span>
      );
    case 'AE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇪
        </span>
      );
    case 'AF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇫
        </span>
      );
    case 'AG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇬
        </span>
      );
    case 'AI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇮
        </span>
      );
    case 'AL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇱
        </span>
      );
    case 'AM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇲
        </span>
      );
    case 'AO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇴
        </span>
      );
    case 'AQ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇶
        </span>
      );
    case 'AR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇷
        </span>
      );
    case 'AS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇸
        </span>
      );
    case 'AT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇹
        </span>
      );
    case 'AU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇺
        </span>
      );
    case 'AW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇼
        </span>
      );
    case 'AX':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇽
        </span>
      );
    case 'AZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇦🇿
        </span>
      );
    case 'BA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇦
        </span>
      );
    case 'BB':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇧
        </span>
      );
    case 'BD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇩
        </span>
      );
    case 'BE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇪
        </span>
      );
    case 'BF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇫
        </span>
      );
    case 'BG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇬
        </span>
      );
    case 'BH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇭
        </span>
      );
    case 'BI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇮
        </span>
      );
    case 'BJ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇯
        </span>
      );
    case 'BL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇱
        </span>
      );
    case 'BM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇲
        </span>
      );
    case 'BN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇳
        </span>
      );
    case 'BO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇴
        </span>
      );
    case 'BQ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇶
        </span>
      );
    case 'BR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇷
        </span>
      );
    case 'BS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇸
        </span>
      );
    case 'BT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇹
        </span>
      );
    case 'BV':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇻
        </span>
      );
    case 'BW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇼
        </span>
      );
    case 'BY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇾
        </span>
      );
    case 'BZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇧🇿
        </span>
      );
    case 'CA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇦
        </span>
      );
    case 'CC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇨
        </span>
      );
    case 'CD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇩
        </span>
      );
    case 'CF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇫
        </span>
      );
    case 'CG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇬
        </span>
      );
    case 'CH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇭
        </span>
      );
    case 'CI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇮
        </span>
      );
    case 'CK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇰
        </span>
      );
    case 'CL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇱
        </span>
      );
    case 'CM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇲
        </span>
      );
    case 'CN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇳
        </span>
      );
    case 'CO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇴
        </span>
      );
    case 'CR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇷
        </span>
      );
    case 'CU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇺
        </span>
      );
    case 'CV':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇻
        </span>
      );
    case 'CW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇼
        </span>
      );
    case 'CX':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇽
        </span>
      );
    case 'CY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇾
        </span>
      );
    case 'CZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇨🇿
        </span>
      );
    case 'DE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇩🇪
        </span>
      );
    case 'DJ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇩🇯
        </span>
      );
    case 'DK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇩🇰
        </span>
      );
    case 'DM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇩🇲
        </span>
      );
    case 'DO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇩🇴
        </span>
      );
    case 'DZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇩🇿
        </span>
      );
    case 'EC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇨
        </span>
      );
    case 'EE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇪
        </span>
      );
    case 'EG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇬
        </span>
      );
    case 'EH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇭
        </span>
      );
    case 'ER':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇷
        </span>
      );
    case 'ES':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇸
        </span>
      );
    case 'ET':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇪🇹
        </span>
      );
    case 'FI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇫🇮
        </span>
      );
    case 'FJ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇫🇯
        </span>
      );
    case 'FK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇫🇰
        </span>
      );
    case 'FM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇫🇲
        </span>
      );
    case 'FO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇫🇴
        </span>
      );
    case 'FR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇫🇷
        </span>
      );
    case 'GA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇦
        </span>
      );
    case 'GB':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇧
        </span>
      );
    case 'GD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇩
        </span>
      );
    case 'GE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇪
        </span>
      );
    case 'GF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇫
        </span>
      );
    case 'GG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇬
        </span>
      );
    case 'GH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇭
        </span>
      );
    case 'GI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇮
        </span>
      );
    case 'GL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇱
        </span>
      );
    case 'GM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇲
        </span>
      );
    case 'GN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇳
        </span>
      );
    case 'GP':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇵
        </span>
      );
    case 'GQ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇶
        </span>
      );
    case 'GR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇷
        </span>
      );
    case 'GS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇸
        </span>
      );
    case 'GT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇹
        </span>
      );
    case 'GU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇺
        </span>
      );
    case 'GW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇼
        </span>
      );
    case 'GY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇬🇾
        </span>
      );
    case 'HK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇭🇰
        </span>
      );
    case 'HM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇭🇲
        </span>
      );
    case 'HN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇭🇳
        </span>
      );
    case 'HR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇭🇷
        </span>
      );
    case 'HT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇭🇹
        </span>
      );
    case 'HU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇭🇺
        </span>
      );
    case 'ID':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇩
        </span>
      );
    case 'IE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇪
        </span>
      );
    case 'IL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇱
        </span>
      );
    case 'IM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇲
        </span>
      );
    case 'IN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇳
        </span>
      );
    case 'IO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇴
        </span>
      );
    case 'IQ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇶
        </span>
      );
    case 'IR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇷
        </span>
      );
    case 'IS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇸
        </span>
      );
    case 'IT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇮🇹
        </span>
      );
    case 'JE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇯🇪
        </span>
      );
    case 'JM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇯🇲
        </span>
      );
    case 'JO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇯🇴
        </span>
      );
    case 'JP':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇯🇵
        </span>
      );
    case 'KE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇪
        </span>
      );
    case 'KG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇬
        </span>
      );
    case 'KH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇭
        </span>
      );
    case 'KI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇮
        </span>
      );
    case 'KM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇲
        </span>
      );
    case 'KN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇳
        </span>
      );
    case 'KP':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇵
        </span>
      );
    case 'KR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇷
        </span>
      );
    case 'KW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇼
        </span>
      );
    case 'KY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇾
        </span>
      );
    case 'KZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇰🇿
        </span>
      );
    case 'LA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇦
        </span>
      );
    case 'LB':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇧
        </span>
      );
    case 'LC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇨
        </span>
      );
    case 'LI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇮
        </span>
      );
    case 'LK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇰
        </span>
      );
    case 'LR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇷
        </span>
      );
    case 'LS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇸
        </span>
      );
    case 'LT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇹
        </span>
      );
    case 'LU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇺
        </span>
      );
    case 'LV':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇻
        </span>
      );
    case 'LY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇱🇾
        </span>
      );
    case 'MA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇦
        </span>
      );
    case 'MC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇨
        </span>
      );
    case 'MD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇩
        </span>
      );
    case 'ME':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇪
        </span>
      );
    case 'MG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇬
        </span>
      );
    case 'MH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇭
        </span>
      );
    case 'MK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇰
        </span>
      );
    case 'ML':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇱
        </span>
      );
    case 'MM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇲
        </span>
      );
    case 'MN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇳
        </span>
      );
    case 'MO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇴
        </span>
      );
    case 'MP':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇵
        </span>
      );
    case 'MQ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇶
        </span>
      );
    case 'MR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇷
        </span>
      );
    case 'MS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇸
        </span>
      );
    case 'MT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇹
        </span>
      );
    case 'MU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇺
        </span>
      );
    case 'MV':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇻
        </span>
      );
    case 'MW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇼
        </span>
      );
    case 'MX':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇽
        </span>
      );
    case 'MY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇾
        </span>
      );
    case 'MZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇲🇿
        </span>
      );
    case 'NA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇦
        </span>
      );
    case 'NC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇨
        </span>
      );
    case 'NE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇪
        </span>
      );
    case 'NF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇫
        </span>
      );
    case 'NG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇬
        </span>
      );
    case 'NI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇮
        </span>
      );
    case 'NL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇱
        </span>
      );
    case 'NO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇴
        </span>
      );
    case 'NP':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇵
        </span>
      );
    case 'NR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇷
        </span>
      );
    case 'NU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇺
        </span>
      );
    case 'NZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇳🇿
        </span>
      );
    case 'OM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇴🇲
        </span>
      );
    case 'PA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇦
        </span>
      );
    case 'PE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇪
        </span>
      );
    case 'PF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇫
        </span>
      );
    case 'PG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇬
        </span>
      );
    case 'PH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇭
        </span>
      );
    case 'PK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇰
        </span>
      );
    case 'PL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇱
        </span>
      );
    case 'PM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇲
        </span>
      );
    case 'PN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇳
        </span>
      );
    case 'PR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇷
        </span>
      );
    case 'PS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇸
        </span>
      );
    case 'PT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇹
        </span>
      );
    case 'PW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇼
        </span>
      );
    case 'PY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇵🇾
        </span>
      );
    case 'QA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇶🇦
        </span>
      );
    case 'RE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇷🇪
        </span>
      );
    case 'RO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇷🇴
        </span>
      );
    case 'RS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇷🇸
        </span>
      );
    case 'RU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇷🇺
        </span>
      );
    case 'RW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇷🇼
        </span>
      );
    case 'SA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇦
        </span>
      );
    case 'SB':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇧
        </span>
      );
    case 'SC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇨
        </span>
      );
    case 'SD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇩
        </span>
      );
    case 'SE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇪
        </span>
      );
    case 'SG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇬
        </span>
      );
    case 'SH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇭
        </span>
      );
    case 'SI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇮
        </span>
      );
    case 'SK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇰
        </span>
      );
    case 'SL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇱
        </span>
      );
    case 'SM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇲
        </span>
      );
    case 'SN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇳
        </span>
      );
    case 'SO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇴
        </span>
      );
    case 'SR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇷
        </span>
      );
    case 'SS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇸
        </span>
      );
    case 'ST':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇹
        </span>
      );
    case 'SV':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇻
        </span>
      );
    case 'SX':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇽
        </span>
      );
    case 'SY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇾
        </span>
      );
    case 'SZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇸🇿
        </span>
      );
    case 'TA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇦
        </span>
      );
    case 'TC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇨
        </span>
      );
    case 'TD':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇩
        </span>
      );
    case 'TF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇫
        </span>
      );
    case 'TG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇬
        </span>
      );
    case 'TH':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇭
        </span>
      );
    case 'TJ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇯
        </span>
      );
    case 'TK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇰
        </span>
      );
    case 'TL':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇱
        </span>
      );
    case 'TM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇲
        </span>
      );
    case 'TN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇳
        </span>
      );
    case 'TO':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇴
        </span>
      );
    case 'TR':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇷
        </span>
      );
    case 'TT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇹
        </span>
      );
    case 'TV':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇻
        </span>
      );
    case 'TW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇼
        </span>
      );
    case 'TZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇹🇿
        </span>
      );
    case 'UA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇺🇦
        </span>
      );
    case 'UG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇺🇬
        </span>
      );
    case 'UM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇺🇲
        </span>
      );
    case 'US':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇺🇸
        </span>
      );
    case 'UY':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇺🇾
        </span>
      );
    case 'UZ':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇺🇿
        </span>
      );
    case 'VA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇦
        </span>
      );
    case 'VC':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇨
        </span>
      );
    case 'VE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇪
        </span>
      );
    case 'VG':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇬
        </span>
      );
    case 'VI':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇮
        </span>
      );
    case 'VN':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇳
        </span>
      );
    case 'VU':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇻🇺
        </span>
      );
    case 'WF':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇼🇫
        </span>
      );
    case 'WS':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇼🇸
        </span>
      );
    case 'XK':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇽🇰
        </span>
      );
    case 'YE':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇾🇪
        </span>
      );
    case 'YT':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇾🇹
        </span>
      );
    case 'ZA':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇿🇦
        </span>
      );
    case 'ZM':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇿🇲
        </span>
      );
    case 'ZW':
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🇿🇼
        </span>
      );
    default:
      return (
        <span title={Title} role="img" aria-label={Title} className={cn} {...attributes}>
          🏴‍☠️
        </span>
      );
  }
};

export default Flag;

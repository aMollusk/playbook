const mediaQuery = size => `@media (min-width: ${size}px)`;

export const MQ_SMALL = mediaQuery(576),
  MQ_MEDIUM = mediaQuery(768),
  MQ_LARGE = mediaQuery(992);

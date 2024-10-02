import { css } from '@emotion/react';
import { mobile, tabletL } from './responsive';

export const globalStyles = css`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff')
      format('woff');
    font-weight: 800;
    font-display: swap;
  }

  :root {
    /* Primary Color */
    --primary: #6807f9;
    --primary-dark: #5305c7;
    --primary-lighter: #9852f9;
    --primary-pale: #f0e6fe;

    /* Secondary Color */
    --secondary: #ffd739;
    --secondary-dark: #ffcd05;
    --secondary-lighter: #ffeb9e;
    --secondary-pale: #fff6d1;

    /* System Color */
    --red: #f44636;
    --yellow: #ffb240;
    --green: #1fd286;
    --blue: #0079ff;

    /* Neutral Color */
    --dark-700: #242a38;
    --dark-500: #494f5f;
    --dark-300: #717788;
    --dark-200: #9ca2b4;
    --dark-100: #c9d0e2;
    --dark-50: #ebeef4;
    --background: #f6f9ff;
    --white: #ffffff;
    --backdrop: rgb(36 42 56 / 40%);

    /* Shadow */
    --shadow1: 0 8px 16px 0 rgb(156 162 180 / 20%);
    --shadow2: 0 2px 4px 0 rgb(156 162 180 / 40%);
    --color-shadow1: 0 4px 16px 0 rgb(104 7 249 / 10%);
    --color-shadow2: 0 2px 4px 0 rgb(104 7 249 / 40%);

    /* Font Size */
    --fs-xs: 0.75rem;
    --fs-s: 0.875rem;
    --fs-base: 1rem;
    --fs-l: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 1.75rem;

    /* Font Weight */
    --fw-r: 400;
    --fw-m: 500;
    --fw-sb: 600;
    --fw-eb: 800;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--white);
    color: var(--dark-700);
    font-size: var(--fs-base);
    font-family:
      'Pretendard',
      -apple-system,
      sans-serif;
    line-height: 1.6;
  }

  h2 {
    font-size: var(--fs-3xl);
    font-weight: var(--fw-sb);

    @media (max-width: ${tabletL}) {
      font-size: var(--fs-2xl);
    }
  }

  h3 {
    font-size: var(--fs-2xl);
    font-weight: var(--fw-sb);

    @media (max-width: ${tabletL}) {
      font-size: var(--fs-xl);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    font-weight: var(--fw-m);
    cursor: pointer;
  }

  input {
    border: none;
  }
`;

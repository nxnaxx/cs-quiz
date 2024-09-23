import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  :root {
    /* Primary Color */
    --primary: #e93737;
    --primary-dark: #d31717;
    --primary-lighter: #f39191;
    --primary-pale: #fdeded;

    /* System Color */
    --red: #f44636;
    --yellow: #ffb240;
    --green: #1fd286;
    --blue: #0079ff;

    /* Neutral Color */
    --black: #070809;
    --dark-700: #343b42;
    --dark-500: #4a545f;
    --dark-300: #798897;
    --dark-100: #ced4d9;
    --dark-50: #ebedef;
    --white: #ffffff;

    /* Font Size */
    --fs-xs: 0.75rem;
    --fs-s: 0.875rem;
    --fs-base: 1rem;
    --fs-l: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 2.25rem;

    /* Font Weight */
    --fw-m: 500;
    --fw-sb: 600;
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
    font-family: 'Pretendard-Regular', sans-serif;
    line-height: 1.6;
  }

  h2 {
    font-size: var(--fs-2xl);
    font-weight: var(--fw-sb);
  }

  h3 {
    font-size: var(--fs-xl);
    font-weight: var(--fw-sb);
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
    cursor: pointer;
  }

  input {
    border: none;
  }
`;

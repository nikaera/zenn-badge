import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState, useEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('xml', xml);

let inputChecker = null;
export default function Home() {
  const [user, setUser] = useState('nikaera');
  const [previewUser, setPreviewUser] = useState('nikaera');
  const [badgeCode, setBadgeCode] = useState('nikaera');
  const [style, setStyle] = useState('plastic')

  useEffect(() => {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  });

  useEffect(() => {
    setBadgeCode(`  <!-- Like のバッジ -->
  <a href="https://zenn.dev/${user}">
    <img src="https://zenn-badge.herokuapp.com/s/${user}/likes?style=${style}" alt="${user} likes" />
  </a>

  <!-- Articles のバッジ -->
  <a href="https://zenn.dev/${user}/articles">
    <img src="https://zenn-badge.herokuapp.com/s/${user}/articles?style=${style}" alt="${user} articles" />
  </a>

  <!-- Followers のバッジ -->
  <a href="https://zenn.dev/${user}/followers">
    <img src="https://zenn-badge.herokuapp.com/s/${user}/followers?style=${style}" alt="${user} followers" />
  </a>

  <!-- Books のバッジ -->
  <a href="https://zenn.dev/${user}/books">
    <img src="https://zenn-badge.herokuapp.com/s/${user}/books?style=${style}" alt="${user} books" />
  </a>

  <!-- Scraps のバッジ -->
  <a href="https://zenn.dev/${user}/scraps">
    <img src="https://zenn-badge.herokuapp.com/s/${user}/scraps?style=${style}" alt="${user} scraps" />
  </a>`);
  }, [user, style]);

  const handleChange = (event) => {
    if (inputChecker)
      clearTimeout(inputChecker);

    inputChecker = setTimeout(() => {
      clearTimeout(inputChecker);
      inputChecker = null;

      setPreviewUser(event.target.value);
    }, 1 * 1000); // 1 seconds

    setUser(event.target.value);
  };

  const handleSelect = (event) => {
    setStyle(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zenn.badge</title>
        <link rel="icon" href="zenn.svg" type="image/svg+xml" />
        <meta name="description" content="GitHub Profile に載せるための Zenn の各種スコアバッジを作成するためのウェブサービス" />
        <meta name="keywords" content="Zenn, GitHub, GitHub Profile, Shields.io" />
        <meta name="author" content="nikaera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://zenn-badge.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zenn.badge" />
        <meta property="og:description" content="GitHub Profile に載せるための Zenn の各種スコアバッジを作成するためのウェブサービス" />
        <meta property="og:site_name" content="Zenn.badge" />
        <meta property="og:image" content="https://zenn-badge.vercel.app/ogp_image.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://zenn-badge.nikaera.vercel.app/">Zenn.badge!</a>
        </h1>

        <p className={styles.description}>
          <a href="https://zenn.dev/" target="_blank" rel="noopener noreferrer">Zenn</a> のスコアを GitHub 風のバッジに変換するサービスです。
        </p>

        <div>
          <h3>注意事項 &rarr;</h3>
          <p>下記の事項にご留意ください。</p>
          <ul>
            <li>12時間ほどデータがキャッシュされます</li>
            <li>100%の動作を保証するものではありません</li>
            <li>APIの利用数制限などにより、表示されない事があります</li>
            <li>GitHub Profile にご利用ください</li>
          </ul>

          <h3>アカウント名を入力してください &rarr;</h3>
          <input type="text" value={user} onChange={handleChange} />
          <select name="style" value={style} onChange={handleSelect}>
            <option value="plastic">plastic</option>
            <option value="flat">flat</option>
            <option value="flat-square">flat-square</option>
            <option value="for-the-badge">for-the-badge</option>
            <option value="social">social</option>
          </select>

          <pre style={{ width: '80vw' }}>
            <code className="xml">
              {badgeCode}
            </code>
          </pre>

          <h3>プレビュー &rarr;</h3>
          <h4>Likes 👍</h4>
          <a href={`https://zenn.dev/${previewUser}`}>
            <img src={`https://zenn-badge.herokuapp.com/s/${previewUser}/likes?style=${style}`} alt={`${previewUser} likes`} />
          </a>

          <h4>Articles 📝</h4>
          <a href={`https://zenn.dev/${previewUser}/articles`}>
            <img src={`https://zenn-badge.herokuapp.com/s/${previewUser}/articles?style=${style}`} alt={`${previewUser} articles`} />
          </a>

          <h4>Followers 👱</h4>
          <a href={`https://zenn.dev/${previewUser}/followers`}>
            <img src={`https://zenn-badge.herokuapp.com/s/${previewUser}/followers?style=${style}`} alt={`${previewUser} followers`} />
          </a>

          <h4>Books 📚</h4>
          <a href={`https://zenn.dev/${previewUser}/books`}>
            <img src={`https://zenn-badge.herokuapp.com/s/${previewUser}/books?style=${style}`} alt={`${previewUser} books`} />
          </a>

          <h4>Scraps 🗑️</h4>
          <a href={`https://zenn.dev/${previewUser}/scraps`}>
            <img src={`https://zenn-badge.herokuapp.com/s/${previewUser}/scraps?style=${style}`} alt={`${previewUser} scraps`} />
          </a>

          <h3>問い合わせ &rarr;</h3>
          <div>
            下記 GitHub の Issue で <a className={styles.link} href="https://github.com/nikaera">nikaera</a> にメンションを付けてご連絡ください。
            <ul>
              <li><a className={styles.link} href="https://github.com/nikaera/zenn-badge">Zenn.badge</a></li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        制作者:&nbsp;<a className={styles.link} href="https://zenn.dev/nikaera" target="_blank" rel="noopener noreferrer">nikaera</a>
      </footer>
    </div>
  )
}

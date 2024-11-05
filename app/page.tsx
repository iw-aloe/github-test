import styles from "@/app/page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

// import { News } from "@/app/_libs/microcms";

// const data: { contents: News[] } = {
//   contents: [
//     {
//       id: "1",
//       title: "渋谷にオフィスを移転しました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//     {
//       id: "2",
//       title: "当初CEOが業界リーダーTOP30に選出されました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/05/19",
//       createdAt: "2023/05/19",
//     },
//     {
//       id: "3",
//       title: "テスト記事です",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2023/04/19",
//       createdAt: "2023/04/19",
//     },
//   ],
// };

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私達は市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={4000}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}

import React, { useEffect, useState } from "react";

import Page_01 from "@/pages/presentation/components/Page_01";
import Page_02 from "@/pages/presentation/components/Page_02";
import Page_03 from "@/pages/presentation/components/Page_03";

import Nav from "@/containers/Nav";
import styles from "@/styles/Home.module.scss";

// const PAGE_LIST = [<Page_01 />, <Page_02 />, <Page_03 />];

const PAGE_LIST = {
  1: <Page_01 />,
  2: <Page_02 />,
  3: <Page_03 />,
};

const Presentation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength] = useState(Object.keys(PAGE_LIST).length);

  return (
    <>
      <div className={styles.presentation}>
        <div className={styles.body}>{PAGE_LIST[currentPage]}</div>
        <div className={styles.footer}>
          <Nav pageLength={pageLength} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  );
};

export default Presentation;

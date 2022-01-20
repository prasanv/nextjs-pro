import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h4>Navigation Examples</h4>
        <li>
          <Link href="/products">
            <a>Routes, useRouter, queryString, etc</a>
          </Link>
        </li>
        <li>
          <Link href="/docs/something/anything">
            <a>Catch all routes - docs/something/anything</a>
          </Link>
        </li>
      </div>
      <div>
        <h4>Static Generation Examples</h4>
        <li>
          <Link href="/1-static-generation/1-get-static-props/1-get-static-props">
            <a>1-getStaticProps</a>
          </Link>
        </li>
        <li>
          <Link href="/1-static-generation/2-get-static-paths-fallback-false">
            <a>2-getStaticPaths-fallback:false</a>
          </Link>
        </li>
        <li>
          <Link href="/1-static-generation/3-get-static-paths-fallback-true">
            <a>3-getStaticPaths-fallback:true</a>
          </Link>
        </li>
        <li>
          <Link href="/1-static-generation/4-get-static-paths-fallback-blocking">
            <a>4-get-static-paths-fallback:blocking</a>
          </Link>
        </li>
      </div>
      <div>
        <h4>Incremental Static Generation</h4>
        <li>
          <Link href="/2-Incremental-static-regeneration">
            <a>Incremental-static-regeneration</a>
          </Link>
        </li>
      </div>
      <div>
        <h4>Server Side Rendering</h4>
        <li>
          <Link href="/3-server-side-rendering">
            <a>get-server-side-props</a>
          </Link>
        </li>
        <li>
          <Link href="/3-server-side-rendering/shallow-routing">
            <a>shallow-routing</a>
          </Link>
        </li>
      </div>
      <div>
        <h4>API Examples</h4>
        <li>
          <Link href="/4-api-examples/comments">
            <a>API methods - GET, POST, DELETE</a>
          </Link>
        </li>
        <li>
          <Link href="/api/something/anything">
            <a>API methods - Catch All Routes including api index</a>
          </Link>
        </li>
      </div>
    </div>
  );
}

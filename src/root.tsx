// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title
} from "solid-start";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>grunner</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <A href="/dashboard">Dashboard</A>
            <A href="/deploy">Deploy</A>
            <A href="/monitoring">Monitoring</A>
            <A href="/settings">Settings</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

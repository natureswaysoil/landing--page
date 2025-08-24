 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/pages/landing.tsx
index 0000000000000000000000000000000000000000..93a3988e6db1d9350d0ac1e8b0dffd4899bf540d 100644
--- a//dev/null
+++ b/pages/landing.tsx
@@ -0,0 +1,12 @@
+import LandingPage from '@/components/LandingPage';
+import { getLandingContent, LandingContent } from '@/lib/cms';
+
+export default function Landing({ content }: { content: LandingContent }) {
+  return <LandingPage content={content} />;
+}
+
+export async function getStaticProps() {
+  const content = await getLandingContent();
+  return { props: { content } };
+}
+
 
EOF
)

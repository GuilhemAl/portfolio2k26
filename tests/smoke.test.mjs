import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

test("the floating CV link targets the current public PDF", () => {
  const cvFloat = read("components/CVFloat.tsx");
  const pdfs = readdirSync(join(root, "public")).filter((name) =>
    name.endsWith(".pdf"),
  );

  assert.deepEqual(pdfs, ["Guilhem Albus \u2014 CV.pdf"]);
  assert.match(cvFloat, /href="\/Guilhem%20Albus%20%E2%80%94%20CV\.pdf"/);
  assert.doesNotMatch(cvFloat, /Chef%20de%20Projet%20IT/);
});

test("Open Graph metadata points to the static hero preview image", () => {
  const site = read("lib/site.ts");
  const layout = read("app/layout.tsx");
  const imagePath = join(root, "public", "og-image-v2.png");

  assert.match(site, /ogImage:\s*"\/og-image-v2\.png"/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /twitter:/);
  assert.ok(existsSync(imagePath));
  assert.ok(statSync(imagePath).size > 0);
});

test("the expected App Router pages exist", () => {
  [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/academics/page.tsx",
    "app/contact/page.tsx",
    "app/experience/page.tsx",
    "app/skills/page.tsx",
  ].forEach((path) => assert.ok(existsSync(join(root, path)), path));
});

test("the old CV filename is not referenced anymore", () => {
  const files = [
    "app/layout.tsx",
    "components/CVFloat.tsx",
    "lib/content.ts",
    "lib/site.ts",
  ];

  files.forEach((file) => {
    assert.doesNotMatch(read(file), /CV Guilhem ALBUS - Chef de Projet IT/);
  });
});

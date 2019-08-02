// test ImportDeclaration of sub folder: "./sub/b"
import { helloWorld } from "@/sub/b";

// test ImportDeclaration side effect module
import "@/sub/b";

// test ExportNamedDeclaration
export { helloWorld } from "@/sub/b";

// test ExportAllDeclaration
export * from "@/sub/b";


helloWorld();

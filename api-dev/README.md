# api

This repository contains all gRPC definitions used in our project.

## Prerequisites

Following instructions in this [link](https://grpc.io/docs/languages/go/quickstart/#prerequisites) to install required protobuf tools for Golang.

## Generating code

```
make
make doc
```

## Code format with VSCode

- Install extension Clang-Format
- Add the following to your settings.json file:
  > "[proto3]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "xaver.clang-format",
  },
- Cmd/Ctrl + S to trigger formatting for .proto file

## Adding new files

- Create your gRPC definitions in .proto files and put them inside `proto` folder.
- Open Makefile and add your new created files to the script.

test
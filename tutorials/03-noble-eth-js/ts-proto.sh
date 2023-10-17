ls ./proto/circle/cctp/v1 | xargs -I {} protoc \
  --plugin="./node_modules/ts-proto/protoc-gen-ts_proto" \
  --ts_proto_out="./generated" \
  --proto_path="./proto" \
  --proto_path="./third_party/proto" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
  circle/cctp/v1/{}
/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * A public key used to verify message signatures
 * @param attester ECDSA uncompressed public key, hex encoded
 */
export interface Attester {
  attester: string;
}

function createBaseAttester(): Attester {
  return { attester: "" };
}

export const Attester = {
  encode(message: Attester, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attester !== "") {
      writer.uint32(10).string(message.attester);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attester {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttester();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attester = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attester {
    return { attester: isSet(object.attester) ? globalThis.String(object.attester) : "" };
  },

  toJSON(message: Attester): unknown {
    const obj: any = {};
    if (message.attester !== "") {
      obj.attester = message.attester;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attester>, I>>(base?: I): Attester {
    return Attester.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attester>, I>>(object: I): Attester {
    const message = createBaseAttester();
    message.attester = object.attester ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

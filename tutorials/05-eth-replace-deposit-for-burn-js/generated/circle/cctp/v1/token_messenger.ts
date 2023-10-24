/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * TODO rename to RemoteTokenMessenger everywhere
 * @param domain_id
 * @param address
 */
export interface TokenMessenger {
  domainId: number;
  address: string;
}

function createBaseTokenMessenger(): TokenMessenger {
  return { domainId: 0, address: "" };
}

export const TokenMessenger = {
  encode(message: TokenMessenger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domainId !== 0) {
      writer.uint32(8).uint32(message.domainId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMessenger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMessenger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.domainId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenMessenger {
    return {
      domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: TokenMessenger): unknown {
    const obj: any = {};
    if (message.domainId !== 0) {
      obj.domainId = Math.round(message.domainId);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenMessenger>, I>>(base?: I): TokenMessenger {
    return TokenMessenger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenMessenger>, I>>(object: I): TokenMessenger {
    const message = createBaseTokenMessenger();
    message.domainId = object.domainId ?? 0;
    message.address = object.address ?? "";
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

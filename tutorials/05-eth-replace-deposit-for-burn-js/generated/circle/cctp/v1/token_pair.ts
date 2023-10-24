/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * TokenPair is used to look up the Noble token (i.e. "uusdc") from a remote
 * domain token address Multiple remote_domain + remote_token pairs can map to
 * the same local_token
 *
 * @param remote_domain the remote domain_id corresponding to the token
 * @param remote_token the remote token address
 * @param local_token the corresponding Noble token denom in uunits
 */
export interface TokenPair {
  remoteDomain: number;
  remoteToken: Uint8Array;
  localToken: string;
}

function createBaseTokenPair(): TokenPair {
  return { remoteDomain: 0, remoteToken: new Uint8Array(0), localToken: "" };
}

export const TokenPair = {
  encode(message: TokenPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteDomain !== 0) {
      writer.uint32(8).uint32(message.remoteDomain);
    }
    if (message.remoteToken.length !== 0) {
      writer.uint32(18).bytes(message.remoteToken);
    }
    if (message.localToken !== "") {
      writer.uint32(26).string(message.localToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.remoteDomain = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteToken = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.localToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPair {
    return {
      remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
      remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
      localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
    };
  },

  toJSON(message: TokenPair): unknown {
    const obj: any = {};
    if (message.remoteDomain !== 0) {
      obj.remoteDomain = Math.round(message.remoteDomain);
    }
    if (message.remoteToken.length !== 0) {
      obj.remoteToken = base64FromBytes(message.remoteToken);
    }
    if (message.localToken !== "") {
      obj.localToken = message.localToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenPair>, I>>(base?: I): TokenPair {
    return TokenPair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenPair>, I>>(object: I): TokenPair {
    const message = createBaseTokenPair();
    message.remoteDomain = object.remoteDomain ?? 0;
    message.remoteToken = object.remoteToken ?? new Uint8Array(0);
    message.localToken = object.localToken ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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

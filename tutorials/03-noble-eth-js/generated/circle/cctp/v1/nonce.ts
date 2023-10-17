/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * The Nonce type functions both to mark receipt of received messages and a
 * counter for sending messages
 * @param source_domain the domain id, used to mark used nonces for received
 * messages
 * @param nonce the nonce number
 */
export interface Nonce {
  sourceDomain: number;
  nonce: Long;
}

function createBaseNonce(): Nonce {
  return { sourceDomain: 0, nonce: Long.UZERO };
}

export const Nonce = {
  encode(message: Nonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceDomain !== 0) {
      writer.uint32(8).uint32(message.sourceDomain);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Nonce {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sourceDomain = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Nonce {
    return {
      sourceDomain: isSet(object.sourceDomain) ? globalThis.Number(object.sourceDomain) : 0,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: Nonce): unknown {
    const obj: any = {};
    if (message.sourceDomain !== 0) {
      obj.sourceDomain = Math.round(message.sourceDomain);
    }
    if (!message.nonce.isZero()) {
      obj.nonce = (message.nonce || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Nonce>, I>>(base?: I): Nonce {
    return Nonce.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Nonce>, I>>(object: I): Nonce {
    const message = createBaseNonce();
    message.sourceDomain = object.sourceDomain ?? 0;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
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

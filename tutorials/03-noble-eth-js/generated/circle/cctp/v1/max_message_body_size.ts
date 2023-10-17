/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * Message format for BurningAndMintingPaused
 * @param paused true if paused, false if not paused
 */
export interface MaxMessageBodySize {
  amount: Long;
}

function createBaseMaxMessageBodySize(): MaxMessageBodySize {
  return { amount: Long.UZERO };
}

export const MaxMessageBodySize = {
  encode(message: MaxMessageBodySize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.amount.isZero()) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaxMessageBodySize {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxMessageBodySize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaxMessageBodySize {
    return { amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO };
  },

  toJSON(message: MaxMessageBodySize): unknown {
    const obj: any = {};
    if (!message.amount.isZero()) {
      obj.amount = (message.amount || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MaxMessageBodySize>, I>>(base?: I): MaxMessageBodySize {
    return MaxMessageBodySize.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MaxMessageBodySize>, I>>(object: I): MaxMessageBodySize {
    const message = createBaseMaxMessageBodySize();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Long.fromValue(object.amount)
      : Long.UZERO;
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

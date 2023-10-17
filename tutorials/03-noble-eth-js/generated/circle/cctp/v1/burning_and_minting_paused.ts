/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * Message format for BurningAndMintingPaused
 * @param paused true if paused, false if not paused
 */
export interface BurningAndMintingPaused {
  paused: boolean;
}

function createBaseBurningAndMintingPaused(): BurningAndMintingPaused {
  return { paused: false };
}

export const BurningAndMintingPaused = {
  encode(message: BurningAndMintingPaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurningAndMintingPaused {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurningAndMintingPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.paused = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BurningAndMintingPaused {
    return { paused: isSet(object.paused) ? globalThis.Boolean(object.paused) : false };
  },

  toJSON(message: BurningAndMintingPaused): unknown {
    const obj: any = {};
    if (message.paused === true) {
      obj.paused = message.paused;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BurningAndMintingPaused>, I>>(base?: I): BurningAndMintingPaused {
    return BurningAndMintingPaused.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BurningAndMintingPaused>, I>>(object: I): BurningAndMintingPaused {
    const message = createBaseBurningAndMintingPaused();
    message.paused = object.paused ?? false;
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

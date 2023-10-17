/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * SignatureThreshold is the minimum amount of signatures required to attest to
 * a message (the 'm' in a m/n multisig)
 * @param amount the number of signatures required
 */
export interface SignatureThreshold {
  amount: number;
}

function createBaseSignatureThreshold(): SignatureThreshold {
  return { amount: 0 };
}

export const SignatureThreshold = {
  encode(message: SignatureThreshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(8).uint32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureThreshold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureThreshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.amount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignatureThreshold {
    return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0 };
  },

  toJSON(message: SignatureThreshold): unknown {
    const obj: any = {};
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignatureThreshold>, I>>(base?: I): SignatureThreshold {
    return SignatureThreshold.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignatureThreshold>, I>>(object: I): SignatureThreshold {
    const message = createBaseSignatureThreshold();
    message.amount = object.amount ?? 0;
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

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * Message format for SendingAndReceivingMessagesPaused
 * @param paused true if paused, false if not paused
 */
export interface SendingAndReceivingMessagesPaused {
  paused: boolean;
}

function createBaseSendingAndReceivingMessagesPaused(): SendingAndReceivingMessagesPaused {
  return { paused: false };
}

export const SendingAndReceivingMessagesPaused = {
  encode(message: SendingAndReceivingMessagesPaused, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused === true) {
      writer.uint32(8).bool(message.paused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendingAndReceivingMessagesPaused {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendingAndReceivingMessagesPaused();
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

  fromJSON(object: any): SendingAndReceivingMessagesPaused {
    return { paused: isSet(object.paused) ? globalThis.Boolean(object.paused) : false };
  },

  toJSON(message: SendingAndReceivingMessagesPaused): unknown {
    const obj: any = {};
    if (message.paused === true) {
      obj.paused = message.paused;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendingAndReceivingMessagesPaused>, I>>(
    base?: I,
  ): SendingAndReceivingMessagesPaused {
    return SendingAndReceivingMessagesPaused.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendingAndReceivingMessagesPaused>, I>>(
    object: I,
  ): SendingAndReceivingMessagesPaused {
    const message = createBaseSendingAndReceivingMessagesPaused();
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

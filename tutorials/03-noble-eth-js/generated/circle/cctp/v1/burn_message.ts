/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * Message format for BurnMessages
 * @param version the message body version
 * @param burn_token the burn token address on source domain as bytes32
 * @param mint_recipient the mint recipient address as bytes32
 * @param amount the burn amount
 * @param message_sender the message sender
 */
export interface BurnMessage {
  version: number;
  burnToken: Uint8Array;
  mintRecipient: Uint8Array;
  amount: string;
  messageSender: Uint8Array;
}

function createBaseBurnMessage(): BurnMessage {
  return {
    version: 0,
    burnToken: new Uint8Array(0),
    mintRecipient: new Uint8Array(0),
    amount: "",
    messageSender: new Uint8Array(0),
  };
}

export const BurnMessage = {
  encode(message: BurnMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.burnToken.length !== 0) {
      writer.uint32(18).bytes(message.burnToken);
    }
    if (message.mintRecipient.length !== 0) {
      writer.uint32(26).bytes(message.mintRecipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.messageSender.length !== 0) {
      writer.uint32(42).bytes(message.messageSender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurnMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.burnToken = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mintRecipient = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.messageSender = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BurnMessage {
    return {
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      burnToken: isSet(object.burnToken) ? bytesFromBase64(object.burnToken) : new Uint8Array(0),
      mintRecipient: isSet(object.mintRecipient) ? bytesFromBase64(object.mintRecipient) : new Uint8Array(0),
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      messageSender: isSet(object.messageSender) ? bytesFromBase64(object.messageSender) : new Uint8Array(0),
    };
  },

  toJSON(message: BurnMessage): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.burnToken.length !== 0) {
      obj.burnToken = base64FromBytes(message.burnToken);
    }
    if (message.mintRecipient.length !== 0) {
      obj.mintRecipient = base64FromBytes(message.mintRecipient);
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.messageSender.length !== 0) {
      obj.messageSender = base64FromBytes(message.messageSender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BurnMessage>, I>>(base?: I): BurnMessage {
    return BurnMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BurnMessage>, I>>(object: I): BurnMessage {
    const message = createBaseBurnMessage();
    message.version = object.version ?? 0;
    message.burnToken = object.burnToken ?? new Uint8Array(0);
    message.mintRecipient = object.mintRecipient ?? new Uint8Array(0);
    message.amount = object.amount ?? "";
    message.messageSender = object.messageSender ?? new Uint8Array(0);
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

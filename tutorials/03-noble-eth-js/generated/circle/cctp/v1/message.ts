/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * Generic message header for all messages passing through CCTP
 * The message body is dynamically-sized to support custom message body
 * formats. Other fields must be fixed-size to avoid hash collisions.
 *
 * Padding: uintNN fields are left-padded, and bytesNN fields are right-padded.
 *
 * @param version the version of the message format
 * @param source_domain domain of home chain
 * @param destination_domain domain of destination chain
 * @param nonce destination-specific nonce
 * @param sender address of sender on source chain as bytes32
 * @param recipient address of recipient on destination chain as bytes32
 * @param destination_caller address of caller on destination chain as bytes32
 * @param message_body raw bytes of message body
 */
export interface Message {
  version: number;
  sourceDomain: number;
  destinationDomain: number;
  nonce: Long;
  sender: Uint8Array;
  recipient: Uint8Array;
  destinationCaller: Uint8Array;
  messageBody: Uint8Array;
}

function createBaseMessage(): Message {
  return {
    version: 0,
    sourceDomain: 0,
    destinationDomain: 0,
    nonce: Long.UZERO,
    sender: new Uint8Array(0),
    recipient: new Uint8Array(0),
    destinationCaller: new Uint8Array(0),
    messageBody: new Uint8Array(0),
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.sourceDomain !== 0) {
      writer.uint32(16).uint32(message.sourceDomain);
    }
    if (message.destinationDomain !== 0) {
      writer.uint32(24).uint32(message.destinationDomain);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    if (message.sender.length !== 0) {
      writer.uint32(42).bytes(message.sender);
    }
    if (message.recipient.length !== 0) {
      writer.uint32(50).bytes(message.recipient);
    }
    if (message.destinationCaller.length !== 0) {
      writer.uint32(58).bytes(message.destinationCaller);
    }
    if (message.messageBody.length !== 0) {
      writer.uint32(66).bytes(message.messageBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
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
          if (tag !== 16) {
            break;
          }

          message.sourceDomain = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.destinationDomain = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sender = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.recipient = reader.bytes();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.destinationCaller = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.messageBody = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      sourceDomain: isSet(object.sourceDomain) ? globalThis.Number(object.sourceDomain) : 0,
      destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(0),
      destinationCaller: isSet(object.destinationCaller)
        ? bytesFromBase64(object.destinationCaller)
        : new Uint8Array(0),
      messageBody: isSet(object.messageBody) ? bytesFromBase64(object.messageBody) : new Uint8Array(0),
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.sourceDomain !== 0) {
      obj.sourceDomain = Math.round(message.sourceDomain);
    }
    if (message.destinationDomain !== 0) {
      obj.destinationDomain = Math.round(message.destinationDomain);
    }
    if (!message.nonce.isZero()) {
      obj.nonce = (message.nonce || Long.UZERO).toString();
    }
    if (message.sender.length !== 0) {
      obj.sender = base64FromBytes(message.sender);
    }
    if (message.recipient.length !== 0) {
      obj.recipient = base64FromBytes(message.recipient);
    }
    if (message.destinationCaller.length !== 0) {
      obj.destinationCaller = base64FromBytes(message.destinationCaller);
    }
    if (message.messageBody.length !== 0) {
      obj.messageBody = base64FromBytes(message.messageBody);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.version = object.version ?? 0;
    message.sourceDomain = object.sourceDomain ?? 0;
    message.destinationDomain = object.destinationDomain ?? 0;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.sender = object.sender ?? new Uint8Array(0);
    message.recipient = object.recipient ?? new Uint8Array(0);
    message.destinationCaller = object.destinationCaller ?? new Uint8Array(0);
    message.messageBody = object.messageBody ?? new Uint8Array(0);
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

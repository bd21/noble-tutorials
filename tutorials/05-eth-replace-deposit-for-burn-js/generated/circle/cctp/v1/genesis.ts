/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attester } from "./attester";
import { BurningAndMintingPaused } from "./burning_and_minting_paused";
import { MaxMessageBodySize } from "./max_message_body_size";
import { Nonce } from "./nonce";
import { PerMessageBurnLimit } from "./per_message_burn_limit";
import { RemoteTokenMessenger } from "./remote_token_messenger";
import { SendingAndReceivingMessagesPaused } from "./sending_and_receiving_messages_paused";
import { SignatureThreshold } from "./signature_threshold";
import { TokenPair } from "./token_pair";

export const protobufPackage = "circle.cctp.v1";

/** GenesisState defines the cctp module's genesis state. */
export interface GenesisState {
  owner: string;
  attesterManager: string;
  pauser: string;
  tokenController: string;
  attesterList: Attester[];
  perMessageBurnLimitList: PerMessageBurnLimit[];
  burningAndMintingPaused?: BurningAndMintingPaused | undefined;
  sendingAndReceivingMessagesPaused?: SendingAndReceivingMessagesPaused | undefined;
  maxMessageBodySize?: MaxMessageBodySize | undefined;
  nextAvailableNonce?: Nonce | undefined;
  signatureThreshold?: SignatureThreshold | undefined;
  tokenPairList: TokenPair[];
  usedNoncesList: Nonce[];
  tokenMessengerList: RemoteTokenMessenger[];
}

function createBaseGenesisState(): GenesisState {
  return {
    owner: "",
    attesterManager: "",
    pauser: "",
    tokenController: "",
    attesterList: [],
    perMessageBurnLimitList: [],
    burningAndMintingPaused: undefined,
    sendingAndReceivingMessagesPaused: undefined,
    maxMessageBodySize: undefined,
    nextAvailableNonce: undefined,
    signatureThreshold: undefined,
    tokenPairList: [],
    usedNoncesList: [],
    tokenMessengerList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.attesterManager !== "") {
      writer.uint32(26).string(message.attesterManager);
    }
    if (message.pauser !== "") {
      writer.uint32(34).string(message.pauser);
    }
    if (message.tokenController !== "") {
      writer.uint32(42).string(message.tokenController);
    }
    for (const v of message.attesterList) {
      Attester.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.perMessageBurnLimitList) {
      PerMessageBurnLimit.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.burningAndMintingPaused !== undefined) {
      BurningAndMintingPaused.encode(message.burningAndMintingPaused, writer.uint32(66).fork()).ldelim();
    }
    if (message.sendingAndReceivingMessagesPaused !== undefined) {
      SendingAndReceivingMessagesPaused.encode(message.sendingAndReceivingMessagesPaused, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.maxMessageBodySize !== undefined) {
      MaxMessageBodySize.encode(message.maxMessageBodySize, writer.uint32(82).fork()).ldelim();
    }
    if (message.nextAvailableNonce !== undefined) {
      Nonce.encode(message.nextAvailableNonce, writer.uint32(90).fork()).ldelim();
    }
    if (message.signatureThreshold !== undefined) {
      SignatureThreshold.encode(message.signatureThreshold, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.tokenPairList) {
      TokenPair.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.usedNoncesList) {
      Nonce.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.tokenMessengerList) {
      RemoteTokenMessenger.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attesterManager = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pauser = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tokenController = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.attesterList.push(Attester.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.perMessageBurnLimitList.push(PerMessageBurnLimit.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.burningAndMintingPaused = BurningAndMintingPaused.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sendingAndReceivingMessagesPaused = SendingAndReceivingMessagesPaused.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.maxMessageBodySize = MaxMessageBodySize.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.nextAvailableNonce = Nonce.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.signatureThreshold = SignatureThreshold.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tokenPairList.push(TokenPair.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.usedNoncesList.push(Nonce.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.tokenMessengerList.push(RemoteTokenMessenger.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      attesterManager: isSet(object.attesterManager) ? globalThis.String(object.attesterManager) : "",
      pauser: isSet(object.pauser) ? globalThis.String(object.pauser) : "",
      tokenController: isSet(object.tokenController) ? globalThis.String(object.tokenController) : "",
      attesterList: globalThis.Array.isArray(object?.attesterList)
        ? object.attesterList.map((e: any) => Attester.fromJSON(e))
        : [],
      perMessageBurnLimitList: globalThis.Array.isArray(object?.perMessageBurnLimitList)
        ? object.perMessageBurnLimitList.map((e: any) => PerMessageBurnLimit.fromJSON(e))
        : [],
      burningAndMintingPaused: isSet(object.burningAndMintingPaused)
        ? BurningAndMintingPaused.fromJSON(object.burningAndMintingPaused)
        : undefined,
      sendingAndReceivingMessagesPaused: isSet(object.sendingAndReceivingMessagesPaused)
        ? SendingAndReceivingMessagesPaused.fromJSON(object.sendingAndReceivingMessagesPaused)
        : undefined,
      maxMessageBodySize: isSet(object.maxMessageBodySize)
        ? MaxMessageBodySize.fromJSON(object.maxMessageBodySize)
        : undefined,
      nextAvailableNonce: isSet(object.nextAvailableNonce) ? Nonce.fromJSON(object.nextAvailableNonce) : undefined,
      signatureThreshold: isSet(object.signatureThreshold)
        ? SignatureThreshold.fromJSON(object.signatureThreshold)
        : undefined,
      tokenPairList: globalThis.Array.isArray(object?.tokenPairList)
        ? object.tokenPairList.map((e: any) => TokenPair.fromJSON(e))
        : [],
      usedNoncesList: globalThis.Array.isArray(object?.usedNoncesList)
        ? object.usedNoncesList.map((e: any) => Nonce.fromJSON(e))
        : [],
      tokenMessengerList: globalThis.Array.isArray(object?.tokenMessengerList)
        ? object.tokenMessengerList.map((e: any) => RemoteTokenMessenger.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.attesterManager !== "") {
      obj.attesterManager = message.attesterManager;
    }
    if (message.pauser !== "") {
      obj.pauser = message.pauser;
    }
    if (message.tokenController !== "") {
      obj.tokenController = message.tokenController;
    }
    if (message.attesterList?.length) {
      obj.attesterList = message.attesterList.map((e) => Attester.toJSON(e));
    }
    if (message.perMessageBurnLimitList?.length) {
      obj.perMessageBurnLimitList = message.perMessageBurnLimitList.map((e) => PerMessageBurnLimit.toJSON(e));
    }
    if (message.burningAndMintingPaused !== undefined) {
      obj.burningAndMintingPaused = BurningAndMintingPaused.toJSON(message.burningAndMintingPaused);
    }
    if (message.sendingAndReceivingMessagesPaused !== undefined) {
      obj.sendingAndReceivingMessagesPaused = SendingAndReceivingMessagesPaused.toJSON(
        message.sendingAndReceivingMessagesPaused,
      );
    }
    if (message.maxMessageBodySize !== undefined) {
      obj.maxMessageBodySize = MaxMessageBodySize.toJSON(message.maxMessageBodySize);
    }
    if (message.nextAvailableNonce !== undefined) {
      obj.nextAvailableNonce = Nonce.toJSON(message.nextAvailableNonce);
    }
    if (message.signatureThreshold !== undefined) {
      obj.signatureThreshold = SignatureThreshold.toJSON(message.signatureThreshold);
    }
    if (message.tokenPairList?.length) {
      obj.tokenPairList = message.tokenPairList.map((e) => TokenPair.toJSON(e));
    }
    if (message.usedNoncesList?.length) {
      obj.usedNoncesList = message.usedNoncesList.map((e) => Nonce.toJSON(e));
    }
    if (message.tokenMessengerList?.length) {
      obj.tokenMessengerList = message.tokenMessengerList.map((e) => RemoteTokenMessenger.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.owner = object.owner ?? "";
    message.attesterManager = object.attesterManager ?? "";
    message.pauser = object.pauser ?? "";
    message.tokenController = object.tokenController ?? "";
    message.attesterList = object.attesterList?.map((e) => Attester.fromPartial(e)) || [];
    message.perMessageBurnLimitList = object.perMessageBurnLimitList?.map((e) => PerMessageBurnLimit.fromPartial(e)) ||
      [];
    message.burningAndMintingPaused =
      (object.burningAndMintingPaused !== undefined && object.burningAndMintingPaused !== null)
        ? BurningAndMintingPaused.fromPartial(object.burningAndMintingPaused)
        : undefined;
    message.sendingAndReceivingMessagesPaused =
      (object.sendingAndReceivingMessagesPaused !== undefined && object.sendingAndReceivingMessagesPaused !== null)
        ? SendingAndReceivingMessagesPaused.fromPartial(object.sendingAndReceivingMessagesPaused)
        : undefined;
    message.maxMessageBodySize = (object.maxMessageBodySize !== undefined && object.maxMessageBodySize !== null)
      ? MaxMessageBodySize.fromPartial(object.maxMessageBodySize)
      : undefined;
    message.nextAvailableNonce = (object.nextAvailableNonce !== undefined && object.nextAvailableNonce !== null)
      ? Nonce.fromPartial(object.nextAvailableNonce)
      : undefined;
    message.signatureThreshold = (object.signatureThreshold !== undefined && object.signatureThreshold !== null)
      ? SignatureThreshold.fromPartial(object.signatureThreshold)
      : undefined;
    message.tokenPairList = object.tokenPairList?.map((e) => TokenPair.fromPartial(e)) || [];
    message.usedNoncesList = object.usedNoncesList?.map((e) => Nonce.fromPartial(e)) || [];
    message.tokenMessengerList = object.tokenMessengerList?.map((e) => RemoteTokenMessenger.fromPartial(e)) || [];
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

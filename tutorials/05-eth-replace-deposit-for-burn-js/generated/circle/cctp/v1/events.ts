/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "circle.cctp.v1";

/**
 * Emitted when an attester is enabled
 * @param attester newly enabled attester
 */
export interface AttesterEnabled {
  attester: string;
}

/**
 * Emitted when an attester is disabled
 * @param attester newly disabled attester
 */
export interface AttesterDisabled {
  attester: string;
}

/**
 * Emitted when threshold number of attestations (m in m/n multisig) is updated
 * @param old_signature_threshold old signature threshold
 * @param new_signature_threshold new signature threshold
 */
export interface SignatureThresholdUpdated {
  oldSignatureThreshold: Long;
  newSignatureThreshold: Long;
}

/**
 * Emitted when owner address is updated
 * @param previous_owner representing the address of the previous owner
 * @param new_owner representing the address of the new owner
 */
export interface OwnerUpdated {
  previousOwner: string;
  newOwner: string;
}

/**
 * Emitted when pauser address is updated
 * @param previous_pauser representing the address of the previous pauser
 * @param new_pauser representing the address of the new pauser
 */
export interface PauserUpdated {
  previousPauser: string;
  newPauser: string;
}

/**
 * Emitted when attester manager address is updated
 * @param previous_attester_manager representing the address of the previous
 * attester manager
 * @param new_attester_manager representing the address of the new attester
 * manager
 */
export interface AttesterManagerUpdated {
  previousAttesterManager: string;
  newAttesterManager: string;
}

/**
 * Emitted when token controller address is updated
 * @param previous_token_controller representing the address of the previous
 * token controller
 * @param new_token_controller representing the address of the new token
 * controller
 */
export interface TokenControllerUpdated {
  previousTokenController: string;
  newTokenController: string;
}

/** Emitted when burning and minting tokens is paused */
export interface BurningAndMintingPausedEvent {
}

/** Emitted when burning and minting tokens is unpaused */
export interface BurningAndMintingUnpausedEvent {
}

/** Emitted when sending and receiving messages is paused */
export interface SendingAndReceivingPausedEvent {
}

/** Emitted when sending and receiving messages is paused */
export interface SendingAndReceivingUnpausedEvent {
}

/**
 * Emitted when a DepositForBurn message is sent
 * @param nonce unique nonce reserved by message
 * @param burn_token address of token burnt on source domain
 * @param amount deposit amount
 * @param depositor address where deposit is transferred from
 * @param mint_recipient address receiving minted tokens on destination domain
 * as bytes32
 * @param destination_domain destination domain
 * @param destination_token_messenger address of TokenMessenger on destination
 * domain as bytes32
 * @param destination_caller authorized caller as bytes32 of receiveMessage() on
 * destination domain, if not equal to bytes32(0). If equal to bytes32(0), any
 * address can call receiveMessage().
 */
export interface DepositForBurn {
  nonce: Long;
  burnToken: string;
  amount: string;
  depositor: string;
  mintRecipient: Uint8Array;
  destinationDomain: number;
  destinationTokenMessenger: Uint8Array;
  destinationCaller: Uint8Array;
}

/**
 * Emitted when tokens are minted
 * @param mint_recipient recipient address of minted tokens
 * @param amount amount of minted tokens
 * @param mint_token contract address of minted token
 */
export interface MintAndWithdraw {
  mintRecipient: string;
  amount: string;
  mintToken: string;
}

/**
 * Emitted when a token pair is linked
 * @param local_token local token to support
 * @param remote_domain remote domain
 * @param remote_token token on `remoteDomain` corresponding to `localToken`
 */
export interface TokenPairLinked {
  localToken: string;
  remoteDomain: number;
  remoteToken: Uint8Array;
}

/**
 * Emitted when a token pair is unlinked
 * @param local_token local token address
 * @param remote_domain remote domain
 * @param remote_token token on `remoteDomain` unlinked from `localToken`
 */
export interface TokenPairUnlinked {
  localToken: string;
  remoteDomain: number;
  remoteToken: Uint8Array;
}

/**
 * Emitted when a new message is dispatched
 * @param message Raw bytes of message
 */
export interface MessageSent {
  message: Uint8Array;
}

/**
 * Emitted when a new message is received
 * @param caller caller (msg.sender) on destination domain
 * @param source_domain the source domain this message originated from
 * @param nonce the nonce unique to this message
 * @param sender the sender of this message
 * @param message_body message body bytes
 */
export interface MessageReceived {
  caller: string;
  sourceDomain: number;
  nonce: Long;
  sender: Uint8Array;
  messageBody: Uint8Array;
}

/**
 * Emitted when max message body size is updated
 * @param new_max_message_body_size new maximum message body size, in bytes
 */
export interface MaxMessageBodySizeUpdated {
  newMaxMessageBodySize: Long;
}

/**
 * Emitted when a RemoteTokenMessenger is added
 * @param domain remote domain
 * @param remote_token_messenger RemoteTokenMessenger on domain
 */
export interface RemoteTokenMessengerAdded {
  domain: number;
  remoteTokenMessenger: Uint8Array;
}

/**
 * Emitted when a RemoteTokenMessenger is removed
 * @param domain remote domain
 * @param remote_token_messenger RemoteTokenMessenger on domain
 */
export interface RemoteTokenMessengerRemoved {
  domain: number;
  remoteTokenMessenger: Uint8Array;
}

function createBaseAttesterEnabled(): AttesterEnabled {
  return { attester: "" };
}

export const AttesterEnabled = {
  encode(message: AttesterEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attester !== "") {
      writer.uint32(10).string(message.attester);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttesterEnabled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttesterEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attester = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttesterEnabled {
    return { attester: isSet(object.attester) ? globalThis.String(object.attester) : "" };
  },

  toJSON(message: AttesterEnabled): unknown {
    const obj: any = {};
    if (message.attester !== "") {
      obj.attester = message.attester;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttesterEnabled>, I>>(base?: I): AttesterEnabled {
    return AttesterEnabled.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttesterEnabled>, I>>(object: I): AttesterEnabled {
    const message = createBaseAttesterEnabled();
    message.attester = object.attester ?? "";
    return message;
  },
};

function createBaseAttesterDisabled(): AttesterDisabled {
  return { attester: "" };
}

export const AttesterDisabled = {
  encode(message: AttesterDisabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attester !== "") {
      writer.uint32(10).string(message.attester);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttesterDisabled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttesterDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attester = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttesterDisabled {
    return { attester: isSet(object.attester) ? globalThis.String(object.attester) : "" };
  },

  toJSON(message: AttesterDisabled): unknown {
    const obj: any = {};
    if (message.attester !== "") {
      obj.attester = message.attester;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttesterDisabled>, I>>(base?: I): AttesterDisabled {
    return AttesterDisabled.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttesterDisabled>, I>>(object: I): AttesterDisabled {
    const message = createBaseAttesterDisabled();
    message.attester = object.attester ?? "";
    return message;
  },
};

function createBaseSignatureThresholdUpdated(): SignatureThresholdUpdated {
  return { oldSignatureThreshold: Long.UZERO, newSignatureThreshold: Long.UZERO };
}

export const SignatureThresholdUpdated = {
  encode(message: SignatureThresholdUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.oldSignatureThreshold.isZero()) {
      writer.uint32(8).uint64(message.oldSignatureThreshold);
    }
    if (!message.newSignatureThreshold.isZero()) {
      writer.uint32(16).uint64(message.newSignatureThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureThresholdUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureThresholdUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.oldSignatureThreshold = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newSignatureThreshold = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignatureThresholdUpdated {
    return {
      oldSignatureThreshold: isSet(object.oldSignatureThreshold)
        ? Long.fromValue(object.oldSignatureThreshold)
        : Long.UZERO,
      newSignatureThreshold: isSet(object.newSignatureThreshold)
        ? Long.fromValue(object.newSignatureThreshold)
        : Long.UZERO,
    };
  },

  toJSON(message: SignatureThresholdUpdated): unknown {
    const obj: any = {};
    if (!message.oldSignatureThreshold.isZero()) {
      obj.oldSignatureThreshold = (message.oldSignatureThreshold || Long.UZERO).toString();
    }
    if (!message.newSignatureThreshold.isZero()) {
      obj.newSignatureThreshold = (message.newSignatureThreshold || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignatureThresholdUpdated>, I>>(base?: I): SignatureThresholdUpdated {
    return SignatureThresholdUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignatureThresholdUpdated>, I>>(object: I): SignatureThresholdUpdated {
    const message = createBaseSignatureThresholdUpdated();
    message.oldSignatureThreshold =
      (object.oldSignatureThreshold !== undefined && object.oldSignatureThreshold !== null)
        ? Long.fromValue(object.oldSignatureThreshold)
        : Long.UZERO;
    message.newSignatureThreshold =
      (object.newSignatureThreshold !== undefined && object.newSignatureThreshold !== null)
        ? Long.fromValue(object.newSignatureThreshold)
        : Long.UZERO;
    return message;
  },
};

function createBaseOwnerUpdated(): OwnerUpdated {
  return { previousOwner: "", newOwner: "" };
}

export const OwnerUpdated = {
  encode(message: OwnerUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previousOwner !== "") {
      writer.uint32(10).string(message.previousOwner);
    }
    if (message.newOwner !== "") {
      writer.uint32(18).string(message.newOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OwnerUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.previousOwner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newOwner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OwnerUpdated {
    return {
      previousOwner: isSet(object.previousOwner) ? globalThis.String(object.previousOwner) : "",
      newOwner: isSet(object.newOwner) ? globalThis.String(object.newOwner) : "",
    };
  },

  toJSON(message: OwnerUpdated): unknown {
    const obj: any = {};
    if (message.previousOwner !== "") {
      obj.previousOwner = message.previousOwner;
    }
    if (message.newOwner !== "") {
      obj.newOwner = message.newOwner;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OwnerUpdated>, I>>(base?: I): OwnerUpdated {
    return OwnerUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OwnerUpdated>, I>>(object: I): OwnerUpdated {
    const message = createBaseOwnerUpdated();
    message.previousOwner = object.previousOwner ?? "";
    message.newOwner = object.newOwner ?? "";
    return message;
  },
};

function createBasePauserUpdated(): PauserUpdated {
  return { previousPauser: "", newPauser: "" };
}

export const PauserUpdated = {
  encode(message: PauserUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previousPauser !== "") {
      writer.uint32(10).string(message.previousPauser);
    }
    if (message.newPauser !== "") {
      writer.uint32(18).string(message.newPauser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PauserUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePauserUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.previousPauser = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newPauser = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PauserUpdated {
    return {
      previousPauser: isSet(object.previousPauser) ? globalThis.String(object.previousPauser) : "",
      newPauser: isSet(object.newPauser) ? globalThis.String(object.newPauser) : "",
    };
  },

  toJSON(message: PauserUpdated): unknown {
    const obj: any = {};
    if (message.previousPauser !== "") {
      obj.previousPauser = message.previousPauser;
    }
    if (message.newPauser !== "") {
      obj.newPauser = message.newPauser;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauserUpdated>, I>>(base?: I): PauserUpdated {
    return PauserUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauserUpdated>, I>>(object: I): PauserUpdated {
    const message = createBasePauserUpdated();
    message.previousPauser = object.previousPauser ?? "";
    message.newPauser = object.newPauser ?? "";
    return message;
  },
};

function createBaseAttesterManagerUpdated(): AttesterManagerUpdated {
  return { previousAttesterManager: "", newAttesterManager: "" };
}

export const AttesterManagerUpdated = {
  encode(message: AttesterManagerUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previousAttesterManager !== "") {
      writer.uint32(10).string(message.previousAttesterManager);
    }
    if (message.newAttesterManager !== "") {
      writer.uint32(18).string(message.newAttesterManager);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttesterManagerUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttesterManagerUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.previousAttesterManager = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newAttesterManager = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttesterManagerUpdated {
    return {
      previousAttesterManager: isSet(object.previousAttesterManager)
        ? globalThis.String(object.previousAttesterManager)
        : "",
      newAttesterManager: isSet(object.newAttesterManager) ? globalThis.String(object.newAttesterManager) : "",
    };
  },

  toJSON(message: AttesterManagerUpdated): unknown {
    const obj: any = {};
    if (message.previousAttesterManager !== "") {
      obj.previousAttesterManager = message.previousAttesterManager;
    }
    if (message.newAttesterManager !== "") {
      obj.newAttesterManager = message.newAttesterManager;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttesterManagerUpdated>, I>>(base?: I): AttesterManagerUpdated {
    return AttesterManagerUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttesterManagerUpdated>, I>>(object: I): AttesterManagerUpdated {
    const message = createBaseAttesterManagerUpdated();
    message.previousAttesterManager = object.previousAttesterManager ?? "";
    message.newAttesterManager = object.newAttesterManager ?? "";
    return message;
  },
};

function createBaseTokenControllerUpdated(): TokenControllerUpdated {
  return { previousTokenController: "", newTokenController: "" };
}

export const TokenControllerUpdated = {
  encode(message: TokenControllerUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previousTokenController !== "") {
      writer.uint32(10).string(message.previousTokenController);
    }
    if (message.newTokenController !== "") {
      writer.uint32(18).string(message.newTokenController);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenControllerUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenControllerUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.previousTokenController = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newTokenController = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenControllerUpdated {
    return {
      previousTokenController: isSet(object.previousTokenController)
        ? globalThis.String(object.previousTokenController)
        : "",
      newTokenController: isSet(object.newTokenController) ? globalThis.String(object.newTokenController) : "",
    };
  },

  toJSON(message: TokenControllerUpdated): unknown {
    const obj: any = {};
    if (message.previousTokenController !== "") {
      obj.previousTokenController = message.previousTokenController;
    }
    if (message.newTokenController !== "") {
      obj.newTokenController = message.newTokenController;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenControllerUpdated>, I>>(base?: I): TokenControllerUpdated {
    return TokenControllerUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenControllerUpdated>, I>>(object: I): TokenControllerUpdated {
    const message = createBaseTokenControllerUpdated();
    message.previousTokenController = object.previousTokenController ?? "";
    message.newTokenController = object.newTokenController ?? "";
    return message;
  },
};

function createBaseBurningAndMintingPausedEvent(): BurningAndMintingPausedEvent {
  return {};
}

export const BurningAndMintingPausedEvent = {
  encode(_: BurningAndMintingPausedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurningAndMintingPausedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurningAndMintingPausedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): BurningAndMintingPausedEvent {
    return {};
  },

  toJSON(_: BurningAndMintingPausedEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<BurningAndMintingPausedEvent>, I>>(base?: I): BurningAndMintingPausedEvent {
    return BurningAndMintingPausedEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BurningAndMintingPausedEvent>, I>>(_: I): BurningAndMintingPausedEvent {
    const message = createBaseBurningAndMintingPausedEvent();
    return message;
  },
};

function createBaseBurningAndMintingUnpausedEvent(): BurningAndMintingUnpausedEvent {
  return {};
}

export const BurningAndMintingUnpausedEvent = {
  encode(_: BurningAndMintingUnpausedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BurningAndMintingUnpausedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurningAndMintingUnpausedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): BurningAndMintingUnpausedEvent {
    return {};
  },

  toJSON(_: BurningAndMintingUnpausedEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<BurningAndMintingUnpausedEvent>, I>>(base?: I): BurningAndMintingUnpausedEvent {
    return BurningAndMintingUnpausedEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BurningAndMintingUnpausedEvent>, I>>(_: I): BurningAndMintingUnpausedEvent {
    const message = createBaseBurningAndMintingUnpausedEvent();
    return message;
  },
};

function createBaseSendingAndReceivingPausedEvent(): SendingAndReceivingPausedEvent {
  return {};
}

export const SendingAndReceivingPausedEvent = {
  encode(_: SendingAndReceivingPausedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendingAndReceivingPausedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendingAndReceivingPausedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SendingAndReceivingPausedEvent {
    return {};
  },

  toJSON(_: SendingAndReceivingPausedEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SendingAndReceivingPausedEvent>, I>>(base?: I): SendingAndReceivingPausedEvent {
    return SendingAndReceivingPausedEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendingAndReceivingPausedEvent>, I>>(_: I): SendingAndReceivingPausedEvent {
    const message = createBaseSendingAndReceivingPausedEvent();
    return message;
  },
};

function createBaseSendingAndReceivingUnpausedEvent(): SendingAndReceivingUnpausedEvent {
  return {};
}

export const SendingAndReceivingUnpausedEvent = {
  encode(_: SendingAndReceivingUnpausedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendingAndReceivingUnpausedEvent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendingAndReceivingUnpausedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): SendingAndReceivingUnpausedEvent {
    return {};
  },

  toJSON(_: SendingAndReceivingUnpausedEvent): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SendingAndReceivingUnpausedEvent>, I>>(
    base?: I,
  ): SendingAndReceivingUnpausedEvent {
    return SendingAndReceivingUnpausedEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendingAndReceivingUnpausedEvent>, I>>(
    _: I,
  ): SendingAndReceivingUnpausedEvent {
    const message = createBaseSendingAndReceivingUnpausedEvent();
    return message;
  },
};

function createBaseDepositForBurn(): DepositForBurn {
  return {
    nonce: Long.UZERO,
    burnToken: "",
    amount: "",
    depositor: "",
    mintRecipient: new Uint8Array(0),
    destinationDomain: 0,
    destinationTokenMessenger: new Uint8Array(0),
    destinationCaller: new Uint8Array(0),
  };
}

export const DepositForBurn = {
  encode(message: DepositForBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.burnToken !== "") {
      writer.uint32(18).string(message.burnToken);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.depositor !== "") {
      writer.uint32(34).string(message.depositor);
    }
    if (message.mintRecipient.length !== 0) {
      writer.uint32(42).bytes(message.mintRecipient);
    }
    if (message.destinationDomain !== 0) {
      writer.uint32(48).uint32(message.destinationDomain);
    }
    if (message.destinationTokenMessenger.length !== 0) {
      writer.uint32(58).bytes(message.destinationTokenMessenger);
    }
    if (message.destinationCaller.length !== 0) {
      writer.uint32(66).bytes(message.destinationCaller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositForBurn {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositForBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nonce = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.burnToken = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.depositor = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mintRecipient = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.destinationDomain = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.destinationTokenMessenger = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.destinationCaller = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DepositForBurn {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      burnToken: isSet(object.burnToken) ? globalThis.String(object.burnToken) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
      mintRecipient: isSet(object.mintRecipient) ? bytesFromBase64(object.mintRecipient) : new Uint8Array(0),
      destinationDomain: isSet(object.destinationDomain) ? globalThis.Number(object.destinationDomain) : 0,
      destinationTokenMessenger: isSet(object.destinationTokenMessenger)
        ? bytesFromBase64(object.destinationTokenMessenger)
        : new Uint8Array(0),
      destinationCaller: isSet(object.destinationCaller)
        ? bytesFromBase64(object.destinationCaller)
        : new Uint8Array(0),
    };
  },

  toJSON(message: DepositForBurn): unknown {
    const obj: any = {};
    if (!message.nonce.isZero()) {
      obj.nonce = (message.nonce || Long.UZERO).toString();
    }
    if (message.burnToken !== "") {
      obj.burnToken = message.burnToken;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.depositor !== "") {
      obj.depositor = message.depositor;
    }
    if (message.mintRecipient.length !== 0) {
      obj.mintRecipient = base64FromBytes(message.mintRecipient);
    }
    if (message.destinationDomain !== 0) {
      obj.destinationDomain = Math.round(message.destinationDomain);
    }
    if (message.destinationTokenMessenger.length !== 0) {
      obj.destinationTokenMessenger = base64FromBytes(message.destinationTokenMessenger);
    }
    if (message.destinationCaller.length !== 0) {
      obj.destinationCaller = base64FromBytes(message.destinationCaller);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DepositForBurn>, I>>(base?: I): DepositForBurn {
    return DepositForBurn.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DepositForBurn>, I>>(object: I): DepositForBurn {
    const message = createBaseDepositForBurn();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.burnToken = object.burnToken ?? "";
    message.amount = object.amount ?? "";
    message.depositor = object.depositor ?? "";
    message.mintRecipient = object.mintRecipient ?? new Uint8Array(0);
    message.destinationDomain = object.destinationDomain ?? 0;
    message.destinationTokenMessenger = object.destinationTokenMessenger ?? new Uint8Array(0);
    message.destinationCaller = object.destinationCaller ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMintAndWithdraw(): MintAndWithdraw {
  return { mintRecipient: "", amount: "", mintToken: "" };
}

export const MintAndWithdraw = {
  encode(message: MintAndWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintRecipient !== "") {
      writer.uint32(10).string(message.mintRecipient);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.mintToken !== "") {
      writer.uint32(26).string(message.mintToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintAndWithdraw {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintAndWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mintRecipient = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mintToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MintAndWithdraw {
    return {
      mintRecipient: isSet(object.mintRecipient) ? globalThis.String(object.mintRecipient) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      mintToken: isSet(object.mintToken) ? globalThis.String(object.mintToken) : "",
    };
  },

  toJSON(message: MintAndWithdraw): unknown {
    const obj: any = {};
    if (message.mintRecipient !== "") {
      obj.mintRecipient = message.mintRecipient;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.mintToken !== "") {
      obj.mintToken = message.mintToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MintAndWithdraw>, I>>(base?: I): MintAndWithdraw {
    return MintAndWithdraw.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MintAndWithdraw>, I>>(object: I): MintAndWithdraw {
    const message = createBaseMintAndWithdraw();
    message.mintRecipient = object.mintRecipient ?? "";
    message.amount = object.amount ?? "";
    message.mintToken = object.mintToken ?? "";
    return message;
  },
};

function createBaseTokenPairLinked(): TokenPairLinked {
  return { localToken: "", remoteDomain: 0, remoteToken: new Uint8Array(0) };
}

export const TokenPairLinked = {
  encode(message: TokenPairLinked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.localToken !== "") {
      writer.uint32(10).string(message.localToken);
    }
    if (message.remoteDomain !== 0) {
      writer.uint32(16).uint32(message.remoteDomain);
    }
    if (message.remoteToken.length !== 0) {
      writer.uint32(26).bytes(message.remoteToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairLinked {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairLinked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.localToken = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.remoteDomain = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.remoteToken = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPairLinked {
    return {
      localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
      remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
      remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
    };
  },

  toJSON(message: TokenPairLinked): unknown {
    const obj: any = {};
    if (message.localToken !== "") {
      obj.localToken = message.localToken;
    }
    if (message.remoteDomain !== 0) {
      obj.remoteDomain = Math.round(message.remoteDomain);
    }
    if (message.remoteToken.length !== 0) {
      obj.remoteToken = base64FromBytes(message.remoteToken);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenPairLinked>, I>>(base?: I): TokenPairLinked {
    return TokenPairLinked.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenPairLinked>, I>>(object: I): TokenPairLinked {
    const message = createBaseTokenPairLinked();
    message.localToken = object.localToken ?? "";
    message.remoteDomain = object.remoteDomain ?? 0;
    message.remoteToken = object.remoteToken ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTokenPairUnlinked(): TokenPairUnlinked {
  return { localToken: "", remoteDomain: 0, remoteToken: new Uint8Array(0) };
}

export const TokenPairUnlinked = {
  encode(message: TokenPairUnlinked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.localToken !== "") {
      writer.uint32(10).string(message.localToken);
    }
    if (message.remoteDomain !== 0) {
      writer.uint32(16).uint32(message.remoteDomain);
    }
    if (message.remoteToken.length !== 0) {
      writer.uint32(26).bytes(message.remoteToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairUnlinked {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairUnlinked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.localToken = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.remoteDomain = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.remoteToken = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenPairUnlinked {
    return {
      localToken: isSet(object.localToken) ? globalThis.String(object.localToken) : "",
      remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
      remoteToken: isSet(object.remoteToken) ? bytesFromBase64(object.remoteToken) : new Uint8Array(0),
    };
  },

  toJSON(message: TokenPairUnlinked): unknown {
    const obj: any = {};
    if (message.localToken !== "") {
      obj.localToken = message.localToken;
    }
    if (message.remoteDomain !== 0) {
      obj.remoteDomain = Math.round(message.remoteDomain);
    }
    if (message.remoteToken.length !== 0) {
      obj.remoteToken = base64FromBytes(message.remoteToken);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenPairUnlinked>, I>>(base?: I): TokenPairUnlinked {
    return TokenPairUnlinked.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenPairUnlinked>, I>>(object: I): TokenPairUnlinked {
    const message = createBaseTokenPairUnlinked();
    message.localToken = object.localToken ?? "";
    message.remoteDomain = object.remoteDomain ?? 0;
    message.remoteToken = object.remoteToken ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMessageSent(): MessageSent {
  return { message: new Uint8Array(0) };
}

export const MessageSent = {
  encode(message: MessageSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message.length !== 0) {
      writer.uint32(10).bytes(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageSent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageSent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageSent {
    return { message: isSet(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0) };
  },

  toJSON(message: MessageSent): unknown {
    const obj: any = {};
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageSent>, I>>(base?: I): MessageSent {
    return MessageSent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageSent>, I>>(object: I): MessageSent {
    const message = createBaseMessageSent();
    message.message = object.message ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMessageReceived(): MessageReceived {
  return { caller: "", sourceDomain: 0, nonce: Long.UZERO, sender: new Uint8Array(0), messageBody: new Uint8Array(0) };
}

export const MessageReceived = {
  encode(message: MessageReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.caller !== "") {
      writer.uint32(10).string(message.caller);
    }
    if (message.sourceDomain !== 0) {
      writer.uint32(16).uint32(message.sourceDomain);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(24).uint64(message.nonce);
    }
    if (message.sender.length !== 0) {
      writer.uint32(34).bytes(message.sender);
    }
    if (message.messageBody.length !== 0) {
      writer.uint32(42).bytes(message.messageBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.caller = reader.string();
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

          message.nonce = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sender = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MessageReceived {
    return {
      caller: isSet(object.caller) ? globalThis.String(object.caller) : "",
      sourceDomain: isSet(object.sourceDomain) ? globalThis.Number(object.sourceDomain) : 0,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
      messageBody: isSet(object.messageBody) ? bytesFromBase64(object.messageBody) : new Uint8Array(0),
    };
  },

  toJSON(message: MessageReceived): unknown {
    const obj: any = {};
    if (message.caller !== "") {
      obj.caller = message.caller;
    }
    if (message.sourceDomain !== 0) {
      obj.sourceDomain = Math.round(message.sourceDomain);
    }
    if (!message.nonce.isZero()) {
      obj.nonce = (message.nonce || Long.UZERO).toString();
    }
    if (message.sender.length !== 0) {
      obj.sender = base64FromBytes(message.sender);
    }
    if (message.messageBody.length !== 0) {
      obj.messageBody = base64FromBytes(message.messageBody);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageReceived>, I>>(base?: I): MessageReceived {
    return MessageReceived.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageReceived>, I>>(object: I): MessageReceived {
    const message = createBaseMessageReceived();
    message.caller = object.caller ?? "";
    message.sourceDomain = object.sourceDomain ?? 0;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    message.sender = object.sender ?? new Uint8Array(0);
    message.messageBody = object.messageBody ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMaxMessageBodySizeUpdated(): MaxMessageBodySizeUpdated {
  return { newMaxMessageBodySize: Long.UZERO };
}

export const MaxMessageBodySizeUpdated = {
  encode(message: MaxMessageBodySizeUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.newMaxMessageBodySize.isZero()) {
      writer.uint32(8).uint64(message.newMaxMessageBodySize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaxMessageBodySizeUpdated {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxMessageBodySizeUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newMaxMessageBodySize = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaxMessageBodySizeUpdated {
    return {
      newMaxMessageBodySize: isSet(object.newMaxMessageBodySize)
        ? Long.fromValue(object.newMaxMessageBodySize)
        : Long.UZERO,
    };
  },

  toJSON(message: MaxMessageBodySizeUpdated): unknown {
    const obj: any = {};
    if (!message.newMaxMessageBodySize.isZero()) {
      obj.newMaxMessageBodySize = (message.newMaxMessageBodySize || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MaxMessageBodySizeUpdated>, I>>(base?: I): MaxMessageBodySizeUpdated {
    return MaxMessageBodySizeUpdated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MaxMessageBodySizeUpdated>, I>>(object: I): MaxMessageBodySizeUpdated {
    const message = createBaseMaxMessageBodySizeUpdated();
    message.newMaxMessageBodySize =
      (object.newMaxMessageBodySize !== undefined && object.newMaxMessageBodySize !== null)
        ? Long.fromValue(object.newMaxMessageBodySize)
        : Long.UZERO;
    return message;
  },
};

function createBaseRemoteTokenMessengerAdded(): RemoteTokenMessengerAdded {
  return { domain: 0, remoteTokenMessenger: new Uint8Array(0) };
}

export const RemoteTokenMessengerAdded = {
  encode(message: RemoteTokenMessengerAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).uint32(message.domain);
    }
    if (message.remoteTokenMessenger.length !== 0) {
      writer.uint32(18).bytes(message.remoteTokenMessenger);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteTokenMessengerAdded {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteTokenMessengerAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.domain = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteTokenMessenger = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoteTokenMessengerAdded {
    return {
      domain: isSet(object.domain) ? globalThis.Number(object.domain) : 0,
      remoteTokenMessenger: isSet(object.remoteTokenMessenger)
        ? bytesFromBase64(object.remoteTokenMessenger)
        : new Uint8Array(0),
    };
  },

  toJSON(message: RemoteTokenMessengerAdded): unknown {
    const obj: any = {};
    if (message.domain !== 0) {
      obj.domain = Math.round(message.domain);
    }
    if (message.remoteTokenMessenger.length !== 0) {
      obj.remoteTokenMessenger = base64FromBytes(message.remoteTokenMessenger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoteTokenMessengerAdded>, I>>(base?: I): RemoteTokenMessengerAdded {
    return RemoteTokenMessengerAdded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoteTokenMessengerAdded>, I>>(object: I): RemoteTokenMessengerAdded {
    const message = createBaseRemoteTokenMessengerAdded();
    message.domain = object.domain ?? 0;
    message.remoteTokenMessenger = object.remoteTokenMessenger ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRemoteTokenMessengerRemoved(): RemoteTokenMessengerRemoved {
  return { domain: 0, remoteTokenMessenger: new Uint8Array(0) };
}

export const RemoteTokenMessengerRemoved = {
  encode(message: RemoteTokenMessengerRemoved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== 0) {
      writer.uint32(8).uint32(message.domain);
    }
    if (message.remoteTokenMessenger.length !== 0) {
      writer.uint32(18).bytes(message.remoteTokenMessenger);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteTokenMessengerRemoved {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteTokenMessengerRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.domain = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteTokenMessenger = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoteTokenMessengerRemoved {
    return {
      domain: isSet(object.domain) ? globalThis.Number(object.domain) : 0,
      remoteTokenMessenger: isSet(object.remoteTokenMessenger)
        ? bytesFromBase64(object.remoteTokenMessenger)
        : new Uint8Array(0),
    };
  },

  toJSON(message: RemoteTokenMessengerRemoved): unknown {
    const obj: any = {};
    if (message.domain !== 0) {
      obj.domain = Math.round(message.domain);
    }
    if (message.remoteTokenMessenger.length !== 0) {
      obj.remoteTokenMessenger = base64FromBytes(message.remoteTokenMessenger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoteTokenMessengerRemoved>, I>>(base?: I): RemoteTokenMessengerRemoved {
    return RemoteTokenMessengerRemoved.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoteTokenMessengerRemoved>, I>>(object: I): RemoteTokenMessengerRemoved {
    const message = createBaseRemoteTokenMessengerRemoved();
    message.domain = object.domain ?? 0;
    message.remoteTokenMessenger = object.remoteTokenMessenger ?? new Uint8Array(0);
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

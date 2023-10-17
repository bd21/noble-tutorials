/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Attester } from "./attester";
import { BurningAndMintingPaused } from "./burning_and_minting_paused";
import { MaxMessageBodySize } from "./max_message_body_size";
import { Nonce } from "./nonce";
import { Params } from "./params";
import { PerMessageBurnLimit } from "./per_message_burn_limit";
import { RemoteTokenMessenger } from "./remote_token_messenger";
import { SendingAndReceivingMessagesPaused } from "./sending_and_receiving_messages_paused";
import { SignatureThreshold } from "./signature_threshold";
import { TokenPair } from "./token_pair";

export const protobufPackage = "circle.cctp.v1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params | undefined;
}

/** QueryRolesRequest is the request type for the Query/Roles RPC method. */
export interface QueryRolesRequest {
}

/** QueryRolesResponse is the response type for the Query/Roles RPC method. */
export interface QueryRolesResponse {
  owner: string;
  attesterManager: string;
  pauser: string;
  tokenController: string;
}

/** QueryAttestersRequest is the request type for the Query/Attester RPC method. */
export interface QueryGetAttesterRequest {
  attester: string;
}

/**
 * QueryAttestersResponse is the response type for the Query/Attester RPC
 * method.
 */
export interface QueryGetAttesterResponse {
  attester?: Attester | undefined;
}

/**
 * QueryAllAttestersRequest is the request type for the Query/Attesters RPC
 * method.
 */
export interface QueryAllAttestersRequest {
  pagination?: PageRequest | undefined;
}

/**
 * QueryAllAttestersResponse is the response type for the Query/Attesters RPC
 * method.
 */
export interface QueryAllAttestersResponse {
  attesters: Attester[];
  pagination?: PageResponse | undefined;
}

/**
 * QueryPerMessageBurnLimitRequest is the request type for the
 * Query/PerMessageBurnLimit RPC method.
 */
export interface QueryGetPerMessageBurnLimitRequest {
  denom: string;
}

/**
 * QueryPerMessageBurnLimitResponse is the response type for the
 * Query/PerMessageBurnLimit RPC method.
 */
export interface QueryGetPerMessageBurnLimitResponse {
  burnLimit?: PerMessageBurnLimit | undefined;
}

/**
 * QueryAllPerMessageBurnLimitsRequest is the response type for the
 * Query/PerMessageBurnLimit RPC method.
 */
export interface QueryAllPerMessageBurnLimitsRequest {
  pagination?: PageRequest | undefined;
}

/**
 * QueryAllPerMessageBurnLimitsRequest is the response type for the
 * Query/PerMessageBurnLimit RPC method.
 */
export interface QueryAllPerMessageBurnLimitsResponse {
  burnLimits: PerMessageBurnLimit[];
  pagination?: PageResponse | undefined;
}

/**
 * QueryBurningAndMintingPausedRequest is the request type for the
 * Query/BurningAndMintingPaused RPC method.
 */
export interface QueryGetBurningAndMintingPausedRequest {
}

/**
 * QueryBurningAndMintingPausedResponse is the response type for the
 * Query/BurningAndMintingPaused RPC method.
 */
export interface QueryGetBurningAndMintingPausedResponse {
  paused?: BurningAndMintingPaused | undefined;
}

/**
 * QuerySendingAndReceivingPausedRequest is the request type for the
 * Query/SendingAndReceivingPaused RPC method.
 */
export interface QueryGetSendingAndReceivingMessagesPausedRequest {
}

/**
 * QuerySendingAndReceivingPausedResponse is the response type for the
 * Query/SendingAndReceivingPaused RPC method.
 */
export interface QueryGetSendingAndReceivingMessagesPausedResponse {
  paused?: SendingAndReceivingMessagesPaused | undefined;
}

/**
 * QueryMaxMessageBodySizeRequest is the request type for the
 * Query/MaxMessageBodySize RPC method.
 */
export interface QueryGetMaxMessageBodySizeRequest {
}

/**
 * QueryMaxMessageBodySizeResponse is the response type for the
 * Query/MaxMessageBodySize RPC method.
 */
export interface QueryGetMaxMessageBodySizeResponse {
  amount?: MaxMessageBodySize | undefined;
}

/**
 * QueryGetNextAvailableNonceRequest is the request type for the
 * Query/NextAvailableNonce RPC method.
 */
export interface QueryGetNextAvailableNonceRequest {
}

/**
 * Query QueryGetNextAvailableNonceResponse is the response type for the
 * Query/NextAvailableNonce RPC method.
 */
export interface QueryGetNextAvailableNonceResponse {
  nonce?: Nonce | undefined;
}

/**
 * QuerySignatureThresholdRequest is the request type for the
 * Query/SignatureThreshold RPC method.
 */
export interface QueryGetSignatureThresholdRequest {
}

/**
 * QuerySignatureThresholdResponse is the response type for the
 * Query/SignatureThreshold RPC method.
 */
export interface QueryGetSignatureThresholdResponse {
  amount?: SignatureThreshold | undefined;
}

/**
 * QueryGetTokenPairRequest is the request type for the Query/TokenPair RPC
 * method.
 */
export interface QueryGetTokenPairRequest {
  remoteDomain: number;
  remoteToken: string;
}

/**
 * QueryGetTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryGetTokenPairResponse {
  pair?: TokenPair | undefined;
}

/**
 * QueryAllTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryAllTokenPairsRequest {
  pagination?: PageRequest | undefined;
}

/**
 * QueryAllTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryAllTokenPairsResponse {
  tokenPairs: TokenPair[];
  pagination?: PageResponse | undefined;
}

/**
 * QueryGetUsedNonceRequest is the request type for the Query/UsedNonce RPC
 * method.
 */
export interface QueryGetUsedNonceRequest {
  sourceDomain: number;
  nonce: Long;
}

/**
 * QueryGetUsedNonceResponse is the response type for the Query/UsedNonce RPC
 * method.
 */
export interface QueryGetUsedNonceResponse {
  nonce?: Nonce | undefined;
}

/**
 * QueryAllUsedNonceRequest is the request type for the Query/UsedNonces RPC
 * method.
 */
export interface QueryAllUsedNoncesRequest {
  pagination?: PageRequest | undefined;
}

/**
 * QueryAllUsedNonceResponse is the response type for the Query/UsedNonces RPC
 * method.
 */
export interface QueryAllUsedNoncesResponse {
  usedNonces: Nonce[];
  pagination?: PageResponse | undefined;
}

/**
 * QueryRemoteTokenMessengerRequest is the request type for the
 * Query/RemoteTokenMessenger RPC method.
 */
export interface QueryRemoteTokenMessengerRequest {
  domainId: number;
}

/**
 * QueryRemoteTokenMessengerResponse is the response type for the
 * Query/RemoteTokenMessenger RPC method.
 */
export interface QueryRemoteTokenMessengerResponse {
  remoteTokenMessenger?: RemoteTokenMessenger | undefined;
}

/**
 * QueryRemoteTokenMessengersRequest is the request type for the
 * Query/RemoteTokenMessengers RPC method.
 */
export interface QueryRemoteTokenMessengersRequest {
  pagination?: PageRequest | undefined;
}

/**
 * QueryRemoteTokenMessengersResponse is the response type for the
 * Query/RemoteTokenMessengers RPC method.
 */
export interface QueryRemoteTokenMessengersResponse {
  remoteTokenMessengers: RemoteTokenMessenger[];
  pagination?: PageResponse | undefined;
}

/**
 * QueryBurnMessageVersionRequest is the request type for the
 * Query/BurnMessageVersion RPC method.
 */
export interface QueryBurnMessageVersionRequest {
}

/**
 * QueryBurnMessageVersionResponse is the response type for the
 * Query/BurnMessageVersion RPC method.
 */
export interface QueryBurnMessageVersionResponse {
  /** version is the burn message version of the local domain. */
  version: number;
}

/**
 * QueryLocalMessageVersionRequest is the request type for the
 * Query/LocalMessageVersion RPC method.
 */
export interface QueryLocalMessageVersionRequest {
}

/**
 * QueryLocalMessageVersionResponse is the response type for the
 * Query/LocalMessageVersion RPC method.
 */
export interface QueryLocalMessageVersionResponse {
  /** version is the message version of the local domain. */
  version: number;
}

/**
 * QueryLocalDomainRequest is the request type for the Query/LocalDomain RPC
 * method.
 */
export interface QueryLocalDomainRequest {
}

/**
 * QueryLocalDomainResponse is the response type for the Query/LocalDomain RPC
 * method.
 */
export interface QueryLocalDomainResponse {
  /** domain_id is the id of the local domain. */
  domainId: number;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryRolesRequest(): QueryRolesRequest {
  return {};
}

export const QueryRolesRequest = {
  encode(_: QueryRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRolesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRolesRequest();
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

  fromJSON(_: any): QueryRolesRequest {
    return {};
  },

  toJSON(_: QueryRolesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRolesRequest>, I>>(base?: I): QueryRolesRequest {
    return QueryRolesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRolesRequest>, I>>(_: I): QueryRolesRequest {
    const message = createBaseQueryRolesRequest();
    return message;
  },
};

function createBaseQueryRolesResponse(): QueryRolesResponse {
  return { owner: "", attesterManager: "", pauser: "", tokenController: "" };
}

export const QueryRolesResponse = {
  encode(message: QueryRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.attesterManager !== "") {
      writer.uint32(18).string(message.attesterManager);
    }
    if (message.pauser !== "") {
      writer.uint32(26).string(message.pauser);
    }
    if (message.tokenController !== "") {
      writer.uint32(34).string(message.tokenController);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRolesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attesterManager = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pauser = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tokenController = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRolesResponse {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      attesterManager: isSet(object.attesterManager) ? globalThis.String(object.attesterManager) : "",
      pauser: isSet(object.pauser) ? globalThis.String(object.pauser) : "",
      tokenController: isSet(object.tokenController) ? globalThis.String(object.tokenController) : "",
    };
  },

  toJSON(message: QueryRolesResponse): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRolesResponse>, I>>(base?: I): QueryRolesResponse {
    return QueryRolesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRolesResponse>, I>>(object: I): QueryRolesResponse {
    const message = createBaseQueryRolesResponse();
    message.owner = object.owner ?? "";
    message.attesterManager = object.attesterManager ?? "";
    message.pauser = object.pauser ?? "";
    message.tokenController = object.tokenController ?? "";
    return message;
  },
};

function createBaseQueryGetAttesterRequest(): QueryGetAttesterRequest {
  return { attester: "" };
}

export const QueryGetAttesterRequest = {
  encode(message: QueryGetAttesterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attester !== "") {
      writer.uint32(10).string(message.attester);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAttesterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAttesterRequest();
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

  fromJSON(object: any): QueryGetAttesterRequest {
    return { attester: isSet(object.attester) ? globalThis.String(object.attester) : "" };
  },

  toJSON(message: QueryGetAttesterRequest): unknown {
    const obj: any = {};
    if (message.attester !== "") {
      obj.attester = message.attester;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAttesterRequest>, I>>(base?: I): QueryGetAttesterRequest {
    return QueryGetAttesterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAttesterRequest>, I>>(object: I): QueryGetAttesterRequest {
    const message = createBaseQueryGetAttesterRequest();
    message.attester = object.attester ?? "";
    return message;
  },
};

function createBaseQueryGetAttesterResponse(): QueryGetAttesterResponse {
  return { attester: undefined };
}

export const QueryGetAttesterResponse = {
  encode(message: QueryGetAttesterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attester !== undefined) {
      Attester.encode(message.attester, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAttesterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAttesterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attester = Attester.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAttesterResponse {
    return { attester: isSet(object.attester) ? Attester.fromJSON(object.attester) : undefined };
  },

  toJSON(message: QueryGetAttesterResponse): unknown {
    const obj: any = {};
    if (message.attester !== undefined) {
      obj.attester = Attester.toJSON(message.attester);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAttesterResponse>, I>>(base?: I): QueryGetAttesterResponse {
    return QueryGetAttesterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAttesterResponse>, I>>(object: I): QueryGetAttesterResponse {
    const message = createBaseQueryGetAttesterResponse();
    message.attester = (object.attester !== undefined && object.attester !== null)
      ? Attester.fromPartial(object.attester)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAttestersRequest(): QueryAllAttestersRequest {
  return { pagination: undefined };
}

export const QueryAllAttestersRequest = {
  encode(message: QueryAllAttestersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAttestersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAttestersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAttestersRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAttestersRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAttestersRequest>, I>>(base?: I): QueryAllAttestersRequest {
    return QueryAllAttestersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAttestersRequest>, I>>(object: I): QueryAllAttestersRequest {
    const message = createBaseQueryAllAttestersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAttestersResponse(): QueryAllAttestersResponse {
  return { attesters: [], pagination: undefined };
}

export const QueryAllAttestersResponse = {
  encode(message: QueryAllAttestersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attesters) {
      Attester.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAttestersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAttestersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attesters.push(Attester.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAttestersResponse {
    return {
      attesters: globalThis.Array.isArray(object?.attesters)
        ? object.attesters.map((e: any) => Attester.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAttestersResponse): unknown {
    const obj: any = {};
    if (message.attesters?.length) {
      obj.attesters = message.attesters.map((e) => Attester.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAttestersResponse>, I>>(base?: I): QueryAllAttestersResponse {
    return QueryAllAttestersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAttestersResponse>, I>>(object: I): QueryAllAttestersResponse {
    const message = createBaseQueryAllAttestersResponse();
    message.attesters = object.attesters?.map((e) => Attester.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPerMessageBurnLimitRequest(): QueryGetPerMessageBurnLimitRequest {
  return { denom: "" };
}

export const QueryGetPerMessageBurnLimitRequest = {
  encode(message: QueryGetPerMessageBurnLimitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPerMessageBurnLimitRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPerMessageBurnLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPerMessageBurnLimitRequest {
    return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
  },

  toJSON(message: QueryGetPerMessageBurnLimitRequest): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPerMessageBurnLimitRequest>, I>>(
    base?: I,
  ): QueryGetPerMessageBurnLimitRequest {
    return QueryGetPerMessageBurnLimitRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPerMessageBurnLimitRequest>, I>>(
    object: I,
  ): QueryGetPerMessageBurnLimitRequest {
    const message = createBaseQueryGetPerMessageBurnLimitRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryGetPerMessageBurnLimitResponse(): QueryGetPerMessageBurnLimitResponse {
  return { burnLimit: undefined };
}

export const QueryGetPerMessageBurnLimitResponse = {
  encode(message: QueryGetPerMessageBurnLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnLimit !== undefined) {
      PerMessageBurnLimit.encode(message.burnLimit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPerMessageBurnLimitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPerMessageBurnLimitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.burnLimit = PerMessageBurnLimit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPerMessageBurnLimitResponse {
    return { burnLimit: isSet(object.burnLimit) ? PerMessageBurnLimit.fromJSON(object.burnLimit) : undefined };
  },

  toJSON(message: QueryGetPerMessageBurnLimitResponse): unknown {
    const obj: any = {};
    if (message.burnLimit !== undefined) {
      obj.burnLimit = PerMessageBurnLimit.toJSON(message.burnLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPerMessageBurnLimitResponse>, I>>(
    base?: I,
  ): QueryGetPerMessageBurnLimitResponse {
    return QueryGetPerMessageBurnLimitResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPerMessageBurnLimitResponse>, I>>(
    object: I,
  ): QueryGetPerMessageBurnLimitResponse {
    const message = createBaseQueryGetPerMessageBurnLimitResponse();
    message.burnLimit = (object.burnLimit !== undefined && object.burnLimit !== null)
      ? PerMessageBurnLimit.fromPartial(object.burnLimit)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPerMessageBurnLimitsRequest(): QueryAllPerMessageBurnLimitsRequest {
  return { pagination: undefined };
}

export const QueryAllPerMessageBurnLimitsRequest = {
  encode(message: QueryAllPerMessageBurnLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPerMessageBurnLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPerMessageBurnLimitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPerMessageBurnLimitsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPerMessageBurnLimitsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPerMessageBurnLimitsRequest>, I>>(
    base?: I,
  ): QueryAllPerMessageBurnLimitsRequest {
    return QueryAllPerMessageBurnLimitsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPerMessageBurnLimitsRequest>, I>>(
    object: I,
  ): QueryAllPerMessageBurnLimitsRequest {
    const message = createBaseQueryAllPerMessageBurnLimitsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPerMessageBurnLimitsResponse(): QueryAllPerMessageBurnLimitsResponse {
  return { burnLimits: [], pagination: undefined };
}

export const QueryAllPerMessageBurnLimitsResponse = {
  encode(message: QueryAllPerMessageBurnLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.burnLimits) {
      PerMessageBurnLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPerMessageBurnLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPerMessageBurnLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.burnLimits.push(PerMessageBurnLimit.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPerMessageBurnLimitsResponse {
    return {
      burnLimits: globalThis.Array.isArray(object?.burnLimits)
        ? object.burnLimits.map((e: any) => PerMessageBurnLimit.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPerMessageBurnLimitsResponse): unknown {
    const obj: any = {};
    if (message.burnLimits?.length) {
      obj.burnLimits = message.burnLimits.map((e) => PerMessageBurnLimit.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPerMessageBurnLimitsResponse>, I>>(
    base?: I,
  ): QueryAllPerMessageBurnLimitsResponse {
    return QueryAllPerMessageBurnLimitsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPerMessageBurnLimitsResponse>, I>>(
    object: I,
  ): QueryAllPerMessageBurnLimitsResponse {
    const message = createBaseQueryAllPerMessageBurnLimitsResponse();
    message.burnLimits = object.burnLimits?.map((e) => PerMessageBurnLimit.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetBurningAndMintingPausedRequest(): QueryGetBurningAndMintingPausedRequest {
  return {};
}

export const QueryGetBurningAndMintingPausedRequest = {
  encode(_: QueryGetBurningAndMintingPausedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBurningAndMintingPausedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBurningAndMintingPausedRequest();
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

  fromJSON(_: any): QueryGetBurningAndMintingPausedRequest {
    return {};
  },

  toJSON(_: QueryGetBurningAndMintingPausedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetBurningAndMintingPausedRequest>, I>>(
    base?: I,
  ): QueryGetBurningAndMintingPausedRequest {
    return QueryGetBurningAndMintingPausedRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetBurningAndMintingPausedRequest>, I>>(
    _: I,
  ): QueryGetBurningAndMintingPausedRequest {
    const message = createBaseQueryGetBurningAndMintingPausedRequest();
    return message;
  },
};

function createBaseQueryGetBurningAndMintingPausedResponse(): QueryGetBurningAndMintingPausedResponse {
  return { paused: undefined };
}

export const QueryGetBurningAndMintingPausedResponse = {
  encode(message: QueryGetBurningAndMintingPausedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paused !== undefined) {
      BurningAndMintingPaused.encode(message.paused, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBurningAndMintingPausedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBurningAndMintingPausedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paused = BurningAndMintingPaused.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetBurningAndMintingPausedResponse {
    return { paused: isSet(object.paused) ? BurningAndMintingPaused.fromJSON(object.paused) : undefined };
  },

  toJSON(message: QueryGetBurningAndMintingPausedResponse): unknown {
    const obj: any = {};
    if (message.paused !== undefined) {
      obj.paused = BurningAndMintingPaused.toJSON(message.paused);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetBurningAndMintingPausedResponse>, I>>(
    base?: I,
  ): QueryGetBurningAndMintingPausedResponse {
    return QueryGetBurningAndMintingPausedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetBurningAndMintingPausedResponse>, I>>(
    object: I,
  ): QueryGetBurningAndMintingPausedResponse {
    const message = createBaseQueryGetBurningAndMintingPausedResponse();
    message.paused = (object.paused !== undefined && object.paused !== null)
      ? BurningAndMintingPaused.fromPartial(object.paused)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSendingAndReceivingMessagesPausedRequest(): QueryGetSendingAndReceivingMessagesPausedRequest {
  return {};
}

export const QueryGetSendingAndReceivingMessagesPausedRequest = {
  encode(_: QueryGetSendingAndReceivingMessagesPausedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSendingAndReceivingMessagesPausedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSendingAndReceivingMessagesPausedRequest();
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

  fromJSON(_: any): QueryGetSendingAndReceivingMessagesPausedRequest {
    return {};
  },

  toJSON(_: QueryGetSendingAndReceivingMessagesPausedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSendingAndReceivingMessagesPausedRequest>, I>>(
    base?: I,
  ): QueryGetSendingAndReceivingMessagesPausedRequest {
    return QueryGetSendingAndReceivingMessagesPausedRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSendingAndReceivingMessagesPausedRequest>, I>>(
    _: I,
  ): QueryGetSendingAndReceivingMessagesPausedRequest {
    const message = createBaseQueryGetSendingAndReceivingMessagesPausedRequest();
    return message;
  },
};

function createBaseQueryGetSendingAndReceivingMessagesPausedResponse(): QueryGetSendingAndReceivingMessagesPausedResponse {
  return { paused: undefined };
}

export const QueryGetSendingAndReceivingMessagesPausedResponse = {
  encode(
    message: QueryGetSendingAndReceivingMessagesPausedResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.paused !== undefined) {
      SendingAndReceivingMessagesPaused.encode(message.paused, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSendingAndReceivingMessagesPausedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSendingAndReceivingMessagesPausedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.paused = SendingAndReceivingMessagesPaused.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSendingAndReceivingMessagesPausedResponse {
    return { paused: isSet(object.paused) ? SendingAndReceivingMessagesPaused.fromJSON(object.paused) : undefined };
  },

  toJSON(message: QueryGetSendingAndReceivingMessagesPausedResponse): unknown {
    const obj: any = {};
    if (message.paused !== undefined) {
      obj.paused = SendingAndReceivingMessagesPaused.toJSON(message.paused);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSendingAndReceivingMessagesPausedResponse>, I>>(
    base?: I,
  ): QueryGetSendingAndReceivingMessagesPausedResponse {
    return QueryGetSendingAndReceivingMessagesPausedResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSendingAndReceivingMessagesPausedResponse>, I>>(
    object: I,
  ): QueryGetSendingAndReceivingMessagesPausedResponse {
    const message = createBaseQueryGetSendingAndReceivingMessagesPausedResponse();
    message.paused = (object.paused !== undefined && object.paused !== null)
      ? SendingAndReceivingMessagesPaused.fromPartial(object.paused)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMaxMessageBodySizeRequest(): QueryGetMaxMessageBodySizeRequest {
  return {};
}

export const QueryGetMaxMessageBodySizeRequest = {
  encode(_: QueryGetMaxMessageBodySizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMaxMessageBodySizeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaxMessageBodySizeRequest();
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

  fromJSON(_: any): QueryGetMaxMessageBodySizeRequest {
    return {};
  },

  toJSON(_: QueryGetMaxMessageBodySizeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetMaxMessageBodySizeRequest>, I>>(
    base?: I,
  ): QueryGetMaxMessageBodySizeRequest {
    return QueryGetMaxMessageBodySizeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMaxMessageBodySizeRequest>, I>>(
    _: I,
  ): QueryGetMaxMessageBodySizeRequest {
    const message = createBaseQueryGetMaxMessageBodySizeRequest();
    return message;
  },
};

function createBaseQueryGetMaxMessageBodySizeResponse(): QueryGetMaxMessageBodySizeResponse {
  return { amount: undefined };
}

export const QueryGetMaxMessageBodySizeResponse = {
  encode(message: QueryGetMaxMessageBodySizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      MaxMessageBodySize.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMaxMessageBodySizeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMaxMessageBodySizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = MaxMessageBodySize.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetMaxMessageBodySizeResponse {
    return { amount: isSet(object.amount) ? MaxMessageBodySize.fromJSON(object.amount) : undefined };
  },

  toJSON(message: QueryGetMaxMessageBodySizeResponse): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = MaxMessageBodySize.toJSON(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetMaxMessageBodySizeResponse>, I>>(
    base?: I,
  ): QueryGetMaxMessageBodySizeResponse {
    return QueryGetMaxMessageBodySizeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMaxMessageBodySizeResponse>, I>>(
    object: I,
  ): QueryGetMaxMessageBodySizeResponse {
    const message = createBaseQueryGetMaxMessageBodySizeResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? MaxMessageBodySize.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseQueryGetNextAvailableNonceRequest(): QueryGetNextAvailableNonceRequest {
  return {};
}

export const QueryGetNextAvailableNonceRequest = {
  encode(_: QueryGetNextAvailableNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNextAvailableNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextAvailableNonceRequest();
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

  fromJSON(_: any): QueryGetNextAvailableNonceRequest {
    return {};
  },

  toJSON(_: QueryGetNextAvailableNonceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNextAvailableNonceRequest>, I>>(
    base?: I,
  ): QueryGetNextAvailableNonceRequest {
    return QueryGetNextAvailableNonceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNextAvailableNonceRequest>, I>>(
    _: I,
  ): QueryGetNextAvailableNonceRequest {
    const message = createBaseQueryGetNextAvailableNonceRequest();
    return message;
  },
};

function createBaseQueryGetNextAvailableNonceResponse(): QueryGetNextAvailableNonceResponse {
  return { nonce: undefined };
}

export const QueryGetNextAvailableNonceResponse = {
  encode(message: QueryGetNextAvailableNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== undefined) {
      Nonce.encode(message.nonce, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNextAvailableNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNextAvailableNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nonce = Nonce.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetNextAvailableNonceResponse {
    return { nonce: isSet(object.nonce) ? Nonce.fromJSON(object.nonce) : undefined };
  },

  toJSON(message: QueryGetNextAvailableNonceResponse): unknown {
    const obj: any = {};
    if (message.nonce !== undefined) {
      obj.nonce = Nonce.toJSON(message.nonce);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetNextAvailableNonceResponse>, I>>(
    base?: I,
  ): QueryGetNextAvailableNonceResponse {
    return QueryGetNextAvailableNonceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNextAvailableNonceResponse>, I>>(
    object: I,
  ): QueryGetNextAvailableNonceResponse {
    const message = createBaseQueryGetNextAvailableNonceResponse();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Nonce.fromPartial(object.nonce) : undefined;
    return message;
  },
};

function createBaseQueryGetSignatureThresholdRequest(): QueryGetSignatureThresholdRequest {
  return {};
}

export const QueryGetSignatureThresholdRequest = {
  encode(_: QueryGetSignatureThresholdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSignatureThresholdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSignatureThresholdRequest();
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

  fromJSON(_: any): QueryGetSignatureThresholdRequest {
    return {};
  },

  toJSON(_: QueryGetSignatureThresholdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSignatureThresholdRequest>, I>>(
    base?: I,
  ): QueryGetSignatureThresholdRequest {
    return QueryGetSignatureThresholdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSignatureThresholdRequest>, I>>(
    _: I,
  ): QueryGetSignatureThresholdRequest {
    const message = createBaseQueryGetSignatureThresholdRequest();
    return message;
  },
};

function createBaseQueryGetSignatureThresholdResponse(): QueryGetSignatureThresholdResponse {
  return { amount: undefined };
}

export const QueryGetSignatureThresholdResponse = {
  encode(message: QueryGetSignatureThresholdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      SignatureThreshold.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSignatureThresholdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSignatureThresholdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.amount = SignatureThreshold.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetSignatureThresholdResponse {
    return { amount: isSet(object.amount) ? SignatureThreshold.fromJSON(object.amount) : undefined };
  },

  toJSON(message: QueryGetSignatureThresholdResponse): unknown {
    const obj: any = {};
    if (message.amount !== undefined) {
      obj.amount = SignatureThreshold.toJSON(message.amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetSignatureThresholdResponse>, I>>(
    base?: I,
  ): QueryGetSignatureThresholdResponse {
    return QueryGetSignatureThresholdResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetSignatureThresholdResponse>, I>>(
    object: I,
  ): QueryGetSignatureThresholdResponse {
    const message = createBaseQueryGetSignatureThresholdResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? SignatureThreshold.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseQueryGetTokenPairRequest(): QueryGetTokenPairRequest {
  return { remoteDomain: 0, remoteToken: "" };
}

export const QueryGetTokenPairRequest = {
  encode(message: QueryGetTokenPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteDomain !== 0) {
      writer.uint32(8).uint32(message.remoteDomain);
    }
    if (message.remoteToken !== "") {
      writer.uint32(18).string(message.remoteToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenPairRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenPairRequest();
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

          message.remoteToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenPairRequest {
    return {
      remoteDomain: isSet(object.remoteDomain) ? globalThis.Number(object.remoteDomain) : 0,
      remoteToken: isSet(object.remoteToken) ? globalThis.String(object.remoteToken) : "",
    };
  },

  toJSON(message: QueryGetTokenPairRequest): unknown {
    const obj: any = {};
    if (message.remoteDomain !== 0) {
      obj.remoteDomain = Math.round(message.remoteDomain);
    }
    if (message.remoteToken !== "") {
      obj.remoteToken = message.remoteToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetTokenPairRequest>, I>>(base?: I): QueryGetTokenPairRequest {
    return QueryGetTokenPairRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetTokenPairRequest>, I>>(object: I): QueryGetTokenPairRequest {
    const message = createBaseQueryGetTokenPairRequest();
    message.remoteDomain = object.remoteDomain ?? 0;
    message.remoteToken = object.remoteToken ?? "";
    return message;
  },
};

function createBaseQueryGetTokenPairResponse(): QueryGetTokenPairResponse {
  return { pair: undefined };
}

export const QueryGetTokenPairResponse = {
  encode(message: QueryGetTokenPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      TokenPair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTokenPairResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTokenPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pair = TokenPair.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetTokenPairResponse {
    return { pair: isSet(object.pair) ? TokenPair.fromJSON(object.pair) : undefined };
  },

  toJSON(message: QueryGetTokenPairResponse): unknown {
    const obj: any = {};
    if (message.pair !== undefined) {
      obj.pair = TokenPair.toJSON(message.pair);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetTokenPairResponse>, I>>(base?: I): QueryGetTokenPairResponse {
    return QueryGetTokenPairResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetTokenPairResponse>, I>>(object: I): QueryGetTokenPairResponse {
    const message = createBaseQueryGetTokenPairResponse();
    message.pair = (object.pair !== undefined && object.pair !== null) ? TokenPair.fromPartial(object.pair) : undefined;
    return message;
  },
};

function createBaseQueryAllTokenPairsRequest(): QueryAllTokenPairsRequest {
  return { pagination: undefined };
}

export const QueryAllTokenPairsRequest = {
  encode(message: QueryAllTokenPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenPairsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenPairsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllTokenPairsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllTokenPairsRequest>, I>>(base?: I): QueryAllTokenPairsRequest {
    return QueryAllTokenPairsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTokenPairsRequest>, I>>(object: I): QueryAllTokenPairsRequest {
    const message = createBaseQueryAllTokenPairsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllTokenPairsResponse(): QueryAllTokenPairsResponse {
  return { tokenPairs: [], pagination: undefined };
}

export const QueryAllTokenPairsResponse = {
  encode(message: QueryAllTokenPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenPairsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllTokenPairsResponse {
    return {
      tokenPairs: globalThis.Array.isArray(object?.tokenPairs)
        ? object.tokenPairs.map((e: any) => TokenPair.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllTokenPairsResponse): unknown {
    const obj: any = {};
    if (message.tokenPairs?.length) {
      obj.tokenPairs = message.tokenPairs.map((e) => TokenPair.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllTokenPairsResponse>, I>>(base?: I): QueryAllTokenPairsResponse {
    return QueryAllTokenPairsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllTokenPairsResponse>, I>>(object: I): QueryAllTokenPairsResponse {
    const message = createBaseQueryAllTokenPairsResponse();
    message.tokenPairs = object.tokenPairs?.map((e) => TokenPair.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetUsedNonceRequest(): QueryGetUsedNonceRequest {
  return { sourceDomain: 0, nonce: Long.UZERO };
}

export const QueryGetUsedNonceRequest = {
  encode(message: QueryGetUsedNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceDomain !== 0) {
      writer.uint32(8).uint32(message.sourceDomain);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(16).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsedNonceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsedNonceRequest();
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

  fromJSON(object: any): QueryGetUsedNonceRequest {
    return {
      sourceDomain: isSet(object.sourceDomain) ? globalThis.Number(object.sourceDomain) : 0,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
    };
  },

  toJSON(message: QueryGetUsedNonceRequest): unknown {
    const obj: any = {};
    if (message.sourceDomain !== 0) {
      obj.sourceDomain = Math.round(message.sourceDomain);
    }
    if (!message.nonce.isZero()) {
      obj.nonce = (message.nonce || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetUsedNonceRequest>, I>>(base?: I): QueryGetUsedNonceRequest {
    return QueryGetUsedNonceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetUsedNonceRequest>, I>>(object: I): QueryGetUsedNonceRequest {
    const message = createBaseQueryGetUsedNonceRequest();
    message.sourceDomain = object.sourceDomain ?? 0;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
};

function createBaseQueryGetUsedNonceResponse(): QueryGetUsedNonceResponse {
  return { nonce: undefined };
}

export const QueryGetUsedNonceResponse = {
  encode(message: QueryGetUsedNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== undefined) {
      Nonce.encode(message.nonce, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsedNonceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsedNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nonce = Nonce.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetUsedNonceResponse {
    return { nonce: isSet(object.nonce) ? Nonce.fromJSON(object.nonce) : undefined };
  },

  toJSON(message: QueryGetUsedNonceResponse): unknown {
    const obj: any = {};
    if (message.nonce !== undefined) {
      obj.nonce = Nonce.toJSON(message.nonce);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetUsedNonceResponse>, I>>(base?: I): QueryGetUsedNonceResponse {
    return QueryGetUsedNonceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetUsedNonceResponse>, I>>(object: I): QueryGetUsedNonceResponse {
    const message = createBaseQueryGetUsedNonceResponse();
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Nonce.fromPartial(object.nonce) : undefined;
    return message;
  },
};

function createBaseQueryAllUsedNoncesRequest(): QueryAllUsedNoncesRequest {
  return { pagination: undefined };
}

export const QueryAllUsedNoncesRequest = {
  encode(message: QueryAllUsedNoncesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUsedNoncesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUsedNoncesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllUsedNoncesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllUsedNoncesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllUsedNoncesRequest>, I>>(base?: I): QueryAllUsedNoncesRequest {
    return QueryAllUsedNoncesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllUsedNoncesRequest>, I>>(object: I): QueryAllUsedNoncesRequest {
    const message = createBaseQueryAllUsedNoncesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllUsedNoncesResponse(): QueryAllUsedNoncesResponse {
  return { usedNonces: [], pagination: undefined };
}

export const QueryAllUsedNoncesResponse = {
  encode(message: QueryAllUsedNoncesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.usedNonces) {
      Nonce.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUsedNoncesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUsedNoncesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.usedNonces.push(Nonce.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllUsedNoncesResponse {
    return {
      usedNonces: globalThis.Array.isArray(object?.usedNonces)
        ? object.usedNonces.map((e: any) => Nonce.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllUsedNoncesResponse): unknown {
    const obj: any = {};
    if (message.usedNonces?.length) {
      obj.usedNonces = message.usedNonces.map((e) => Nonce.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllUsedNoncesResponse>, I>>(base?: I): QueryAllUsedNoncesResponse {
    return QueryAllUsedNoncesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllUsedNoncesResponse>, I>>(object: I): QueryAllUsedNoncesResponse {
    const message = createBaseQueryAllUsedNoncesResponse();
    message.usedNonces = object.usedNonces?.map((e) => Nonce.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRemoteTokenMessengerRequest(): QueryRemoteTokenMessengerRequest {
  return { domainId: 0 };
}

export const QueryRemoteTokenMessengerRequest = {
  encode(message: QueryRemoteTokenMessengerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domainId !== 0) {
      writer.uint32(8).uint32(message.domainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRemoteTokenMessengerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemoteTokenMessengerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.domainId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRemoteTokenMessengerRequest {
    return { domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0 };
  },

  toJSON(message: QueryRemoteTokenMessengerRequest): unknown {
    const obj: any = {};
    if (message.domainId !== 0) {
      obj.domainId = Math.round(message.domainId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRemoteTokenMessengerRequest>, I>>(
    base?: I,
  ): QueryRemoteTokenMessengerRequest {
    return QueryRemoteTokenMessengerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRemoteTokenMessengerRequest>, I>>(
    object: I,
  ): QueryRemoteTokenMessengerRequest {
    const message = createBaseQueryRemoteTokenMessengerRequest();
    message.domainId = object.domainId ?? 0;
    return message;
  },
};

function createBaseQueryRemoteTokenMessengerResponse(): QueryRemoteTokenMessengerResponse {
  return { remoteTokenMessenger: undefined };
}

export const QueryRemoteTokenMessengerResponse = {
  encode(message: QueryRemoteTokenMessengerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteTokenMessenger !== undefined) {
      RemoteTokenMessenger.encode(message.remoteTokenMessenger, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRemoteTokenMessengerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemoteTokenMessengerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.remoteTokenMessenger = RemoteTokenMessenger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRemoteTokenMessengerResponse {
    return {
      remoteTokenMessenger: isSet(object.remoteTokenMessenger)
        ? RemoteTokenMessenger.fromJSON(object.remoteTokenMessenger)
        : undefined,
    };
  },

  toJSON(message: QueryRemoteTokenMessengerResponse): unknown {
    const obj: any = {};
    if (message.remoteTokenMessenger !== undefined) {
      obj.remoteTokenMessenger = RemoteTokenMessenger.toJSON(message.remoteTokenMessenger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRemoteTokenMessengerResponse>, I>>(
    base?: I,
  ): QueryRemoteTokenMessengerResponse {
    return QueryRemoteTokenMessengerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRemoteTokenMessengerResponse>, I>>(
    object: I,
  ): QueryRemoteTokenMessengerResponse {
    const message = createBaseQueryRemoteTokenMessengerResponse();
    message.remoteTokenMessenger = (object.remoteTokenMessenger !== undefined && object.remoteTokenMessenger !== null)
      ? RemoteTokenMessenger.fromPartial(object.remoteTokenMessenger)
      : undefined;
    return message;
  },
};

function createBaseQueryRemoteTokenMessengersRequest(): QueryRemoteTokenMessengersRequest {
  return { pagination: undefined };
}

export const QueryRemoteTokenMessengersRequest = {
  encode(message: QueryRemoteTokenMessengersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRemoteTokenMessengersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemoteTokenMessengersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRemoteTokenMessengersRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRemoteTokenMessengersRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRemoteTokenMessengersRequest>, I>>(
    base?: I,
  ): QueryRemoteTokenMessengersRequest {
    return QueryRemoteTokenMessengersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRemoteTokenMessengersRequest>, I>>(
    object: I,
  ): QueryRemoteTokenMessengersRequest {
    const message = createBaseQueryRemoteTokenMessengersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRemoteTokenMessengersResponse(): QueryRemoteTokenMessengersResponse {
  return { remoteTokenMessengers: [], pagination: undefined };
}

export const QueryRemoteTokenMessengersResponse = {
  encode(message: QueryRemoteTokenMessengersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.remoteTokenMessengers) {
      RemoteTokenMessenger.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRemoteTokenMessengersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemoteTokenMessengersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.remoteTokenMessengers.push(RemoteTokenMessenger.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRemoteTokenMessengersResponse {
    return {
      remoteTokenMessengers: globalThis.Array.isArray(object?.remoteTokenMessengers)
        ? object.remoteTokenMessengers.map((e: any) => RemoteTokenMessenger.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRemoteTokenMessengersResponse): unknown {
    const obj: any = {};
    if (message.remoteTokenMessengers?.length) {
      obj.remoteTokenMessengers = message.remoteTokenMessengers.map((e) => RemoteTokenMessenger.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRemoteTokenMessengersResponse>, I>>(
    base?: I,
  ): QueryRemoteTokenMessengersResponse {
    return QueryRemoteTokenMessengersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRemoteTokenMessengersResponse>, I>>(
    object: I,
  ): QueryRemoteTokenMessengersResponse {
    const message = createBaseQueryRemoteTokenMessengersResponse();
    message.remoteTokenMessengers = object.remoteTokenMessengers?.map((e) => RemoteTokenMessenger.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBurnMessageVersionRequest(): QueryBurnMessageVersionRequest {
  return {};
}

export const QueryBurnMessageVersionRequest = {
  encode(_: QueryBurnMessageVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnMessageVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnMessageVersionRequest();
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

  fromJSON(_: any): QueryBurnMessageVersionRequest {
    return {};
  },

  toJSON(_: QueryBurnMessageVersionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBurnMessageVersionRequest>, I>>(base?: I): QueryBurnMessageVersionRequest {
    return QueryBurnMessageVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBurnMessageVersionRequest>, I>>(_: I): QueryBurnMessageVersionRequest {
    const message = createBaseQueryBurnMessageVersionRequest();
    return message;
  },
};

function createBaseQueryBurnMessageVersionResponse(): QueryBurnMessageVersionResponse {
  return { version: 0 };
}

export const QueryBurnMessageVersionResponse = {
  encode(message: QueryBurnMessageVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnMessageVersionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnMessageVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBurnMessageVersionResponse {
    return { version: isSet(object.version) ? globalThis.Number(object.version) : 0 };
  },

  toJSON(message: QueryBurnMessageVersionResponse): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBurnMessageVersionResponse>, I>>(base?: I): QueryBurnMessageVersionResponse {
    return QueryBurnMessageVersionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBurnMessageVersionResponse>, I>>(
    object: I,
  ): QueryBurnMessageVersionResponse {
    const message = createBaseQueryBurnMessageVersionResponse();
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseQueryLocalMessageVersionRequest(): QueryLocalMessageVersionRequest {
  return {};
}

export const QueryLocalMessageVersionRequest = {
  encode(_: QueryLocalMessageVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLocalMessageVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocalMessageVersionRequest();
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

  fromJSON(_: any): QueryLocalMessageVersionRequest {
    return {};
  },

  toJSON(_: QueryLocalMessageVersionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLocalMessageVersionRequest>, I>>(base?: I): QueryLocalMessageVersionRequest {
    return QueryLocalMessageVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryLocalMessageVersionRequest>, I>>(_: I): QueryLocalMessageVersionRequest {
    const message = createBaseQueryLocalMessageVersionRequest();
    return message;
  },
};

function createBaseQueryLocalMessageVersionResponse(): QueryLocalMessageVersionResponse {
  return { version: 0 };
}

export const QueryLocalMessageVersionResponse = {
  encode(message: QueryLocalMessageVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLocalMessageVersionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocalMessageVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLocalMessageVersionResponse {
    return { version: isSet(object.version) ? globalThis.Number(object.version) : 0 };
  },

  toJSON(message: QueryLocalMessageVersionResponse): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLocalMessageVersionResponse>, I>>(
    base?: I,
  ): QueryLocalMessageVersionResponse {
    return QueryLocalMessageVersionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryLocalMessageVersionResponse>, I>>(
    object: I,
  ): QueryLocalMessageVersionResponse {
    const message = createBaseQueryLocalMessageVersionResponse();
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseQueryLocalDomainRequest(): QueryLocalDomainRequest {
  return {};
}

export const QueryLocalDomainRequest = {
  encode(_: QueryLocalDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLocalDomainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocalDomainRequest();
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

  fromJSON(_: any): QueryLocalDomainRequest {
    return {};
  },

  toJSON(_: QueryLocalDomainRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLocalDomainRequest>, I>>(base?: I): QueryLocalDomainRequest {
    return QueryLocalDomainRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryLocalDomainRequest>, I>>(_: I): QueryLocalDomainRequest {
    const message = createBaseQueryLocalDomainRequest();
    return message;
  },
};

function createBaseQueryLocalDomainResponse(): QueryLocalDomainResponse {
  return { domainId: 0 };
}

export const QueryLocalDomainResponse = {
  encode(message: QueryLocalDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domainId !== 0) {
      writer.uint32(8).uint32(message.domainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLocalDomainResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLocalDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.domainId = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryLocalDomainResponse {
    return { domainId: isSet(object.domainId) ? globalThis.Number(object.domainId) : 0 };
  },

  toJSON(message: QueryLocalDomainResponse): unknown {
    const obj: any = {};
    if (message.domainId !== 0) {
      obj.domainId = Math.round(message.domainId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryLocalDomainResponse>, I>>(base?: I): QueryLocalDomainResponse {
    return QueryLocalDomainResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryLocalDomainResponse>, I>>(object: I): QueryLocalDomainResponse {
    const message = createBaseQueryLocalDomainResponse();
    message.domainId = object.domainId ?? 0;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Roles(request: QueryRolesRequest): Promise<QueryRolesResponse>;
  /** Queries an Attester by index */
  Attester(request: QueryGetAttesterRequest): Promise<QueryGetAttesterResponse>;
  /** Queries a list of Attesters */
  Attesters(request: QueryAllAttestersRequest): Promise<QueryAllAttestersResponse>;
  /** Queries a PerMessageBurnLimit by index */
  PerMessageBurnLimit(request: QueryGetPerMessageBurnLimitRequest): Promise<QueryGetPerMessageBurnLimitResponse>;
  /** Queries a list of PerMessageBurnLimits */
  PerMessageBurnLimits(request: QueryAllPerMessageBurnLimitsRequest): Promise<QueryAllPerMessageBurnLimitsResponse>;
  /** Queries BurningAndMintingPaused */
  BurningAndMintingPaused(
    request: QueryGetBurningAndMintingPausedRequest,
  ): Promise<QueryGetBurningAndMintingPausedResponse>;
  /** Queries SendingAndReceivingPaused */
  SendingAndReceivingMessagesPaused(
    request: QueryGetSendingAndReceivingMessagesPausedRequest,
  ): Promise<QueryGetSendingAndReceivingMessagesPausedResponse>;
  /** Queries the MaxMessageBodySize */
  MaxMessageBodySize(request: QueryGetMaxMessageBodySizeRequest): Promise<QueryGetMaxMessageBodySizeResponse>;
  /** Queries the NextAvailableNonce */
  NextAvailableNonce(request: QueryGetNextAvailableNonceRequest): Promise<QueryGetNextAvailableNonceResponse>;
  /** Queries the SignatureThreshold */
  SignatureThreshold(request: QueryGetSignatureThresholdRequest): Promise<QueryGetSignatureThresholdResponse>;
  /** Queries a TokenPair by index */
  TokenPair(request: QueryGetTokenPairRequest): Promise<QueryGetTokenPairResponse>;
  /** Queries a list of TokenPair */
  TokenPairs(request: QueryAllTokenPairsRequest): Promise<QueryAllTokenPairsResponse>;
  /** Queries a UsedNonce by index */
  UsedNonce(request: QueryGetUsedNonceRequest): Promise<QueryGetUsedNonceResponse>;
  /** Queries a list of UsedNonces */
  UsedNonces(request: QueryAllUsedNoncesRequest): Promise<QueryAllUsedNoncesResponse>;
  /** Query the RemoteTokenMessenger of a specific domain. */
  RemoteTokenMessenger(request: QueryRemoteTokenMessengerRequest): Promise<QueryRemoteTokenMessengerResponse>;
  /** Query all RemoteTokenMessenger's. */
  RemoteTokenMessengers(request: QueryRemoteTokenMessengersRequest): Promise<QueryRemoteTokenMessengersResponse>;
  BurnMessageVersion(request: QueryBurnMessageVersionRequest): Promise<QueryBurnMessageVersionResponse>;
  LocalMessageVersion(request: QueryLocalMessageVersionRequest): Promise<QueryLocalMessageVersionResponse>;
  LocalDomain(request: QueryLocalDomainRequest): Promise<QueryLocalDomainResponse>;
}

export const QueryServiceName = "circle.cctp.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Roles = this.Roles.bind(this);
    this.Attester = this.Attester.bind(this);
    this.Attesters = this.Attesters.bind(this);
    this.PerMessageBurnLimit = this.PerMessageBurnLimit.bind(this);
    this.PerMessageBurnLimits = this.PerMessageBurnLimits.bind(this);
    this.BurningAndMintingPaused = this.BurningAndMintingPaused.bind(this);
    this.SendingAndReceivingMessagesPaused = this.SendingAndReceivingMessagesPaused.bind(this);
    this.MaxMessageBodySize = this.MaxMessageBodySize.bind(this);
    this.NextAvailableNonce = this.NextAvailableNonce.bind(this);
    this.SignatureThreshold = this.SignatureThreshold.bind(this);
    this.TokenPair = this.TokenPair.bind(this);
    this.TokenPairs = this.TokenPairs.bind(this);
    this.UsedNonce = this.UsedNonce.bind(this);
    this.UsedNonces = this.UsedNonces.bind(this);
    this.RemoteTokenMessenger = this.RemoteTokenMessenger.bind(this);
    this.RemoteTokenMessengers = this.RemoteTokenMessengers.bind(this);
    this.BurnMessageVersion = this.BurnMessageVersion.bind(this);
    this.LocalMessageVersion = this.LocalMessageVersion.bind(this);
    this.LocalDomain = this.LocalDomain.bind(this);
  }
  Roles(request: QueryRolesRequest): Promise<QueryRolesResponse> {
    const data = QueryRolesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Roles", data);
    return promise.then((data) => QueryRolesResponse.decode(_m0.Reader.create(data)));
  }

  Attester(request: QueryGetAttesterRequest): Promise<QueryGetAttesterResponse> {
    const data = QueryGetAttesterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Attester", data);
    return promise.then((data) => QueryGetAttesterResponse.decode(_m0.Reader.create(data)));
  }

  Attesters(request: QueryAllAttestersRequest): Promise<QueryAllAttestersResponse> {
    const data = QueryAllAttestersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Attesters", data);
    return promise.then((data) => QueryAllAttestersResponse.decode(_m0.Reader.create(data)));
  }

  PerMessageBurnLimit(request: QueryGetPerMessageBurnLimitRequest): Promise<QueryGetPerMessageBurnLimitResponse> {
    const data = QueryGetPerMessageBurnLimitRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PerMessageBurnLimit", data);
    return promise.then((data) => QueryGetPerMessageBurnLimitResponse.decode(_m0.Reader.create(data)));
  }

  PerMessageBurnLimits(request: QueryAllPerMessageBurnLimitsRequest): Promise<QueryAllPerMessageBurnLimitsResponse> {
    const data = QueryAllPerMessageBurnLimitsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PerMessageBurnLimits", data);
    return promise.then((data) => QueryAllPerMessageBurnLimitsResponse.decode(_m0.Reader.create(data)));
  }

  BurningAndMintingPaused(
    request: QueryGetBurningAndMintingPausedRequest,
  ): Promise<QueryGetBurningAndMintingPausedResponse> {
    const data = QueryGetBurningAndMintingPausedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BurningAndMintingPaused", data);
    return promise.then((data) => QueryGetBurningAndMintingPausedResponse.decode(_m0.Reader.create(data)));
  }

  SendingAndReceivingMessagesPaused(
    request: QueryGetSendingAndReceivingMessagesPausedRequest,
  ): Promise<QueryGetSendingAndReceivingMessagesPausedResponse> {
    const data = QueryGetSendingAndReceivingMessagesPausedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendingAndReceivingMessagesPaused", data);
    return promise.then((data) => QueryGetSendingAndReceivingMessagesPausedResponse.decode(_m0.Reader.create(data)));
  }

  MaxMessageBodySize(request: QueryGetMaxMessageBodySizeRequest): Promise<QueryGetMaxMessageBodySizeResponse> {
    const data = QueryGetMaxMessageBodySizeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MaxMessageBodySize", data);
    return promise.then((data) => QueryGetMaxMessageBodySizeResponse.decode(_m0.Reader.create(data)));
  }

  NextAvailableNonce(request: QueryGetNextAvailableNonceRequest): Promise<QueryGetNextAvailableNonceResponse> {
    const data = QueryGetNextAvailableNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NextAvailableNonce", data);
    return promise.then((data) => QueryGetNextAvailableNonceResponse.decode(_m0.Reader.create(data)));
  }

  SignatureThreshold(request: QueryGetSignatureThresholdRequest): Promise<QueryGetSignatureThresholdResponse> {
    const data = QueryGetSignatureThresholdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignatureThreshold", data);
    return promise.then((data) => QueryGetSignatureThresholdResponse.decode(_m0.Reader.create(data)));
  }

  TokenPair(request: QueryGetTokenPairRequest): Promise<QueryGetTokenPairResponse> {
    const data = QueryGetTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenPair", data);
    return promise.then((data) => QueryGetTokenPairResponse.decode(_m0.Reader.create(data)));
  }

  TokenPairs(request: QueryAllTokenPairsRequest): Promise<QueryAllTokenPairsResponse> {
    const data = QueryAllTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TokenPairs", data);
    return promise.then((data) => QueryAllTokenPairsResponse.decode(_m0.Reader.create(data)));
  }

  UsedNonce(request: QueryGetUsedNonceRequest): Promise<QueryGetUsedNonceResponse> {
    const data = QueryGetUsedNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UsedNonce", data);
    return promise.then((data) => QueryGetUsedNonceResponse.decode(_m0.Reader.create(data)));
  }

  UsedNonces(request: QueryAllUsedNoncesRequest): Promise<QueryAllUsedNoncesResponse> {
    const data = QueryAllUsedNoncesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UsedNonces", data);
    return promise.then((data) => QueryAllUsedNoncesResponse.decode(_m0.Reader.create(data)));
  }

  RemoteTokenMessenger(request: QueryRemoteTokenMessengerRequest): Promise<QueryRemoteTokenMessengerResponse> {
    const data = QueryRemoteTokenMessengerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoteTokenMessenger", data);
    return promise.then((data) => QueryRemoteTokenMessengerResponse.decode(_m0.Reader.create(data)));
  }

  RemoteTokenMessengers(request: QueryRemoteTokenMessengersRequest): Promise<QueryRemoteTokenMessengersResponse> {
    const data = QueryRemoteTokenMessengersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoteTokenMessengers", data);
    return promise.then((data) => QueryRemoteTokenMessengersResponse.decode(_m0.Reader.create(data)));
  }

  BurnMessageVersion(request: QueryBurnMessageVersionRequest): Promise<QueryBurnMessageVersionResponse> {
    const data = QueryBurnMessageVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BurnMessageVersion", data);
    return promise.then((data) => QueryBurnMessageVersionResponse.decode(_m0.Reader.create(data)));
  }

  LocalMessageVersion(request: QueryLocalMessageVersionRequest): Promise<QueryLocalMessageVersionResponse> {
    const data = QueryLocalMessageVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LocalMessageVersion", data);
    return promise.then((data) => QueryLocalMessageVersionResponse.decode(_m0.Reader.create(data)));
  }

  LocalDomain(request: QueryLocalDomainRequest): Promise<QueryLocalDomainResponse> {
    const data = QueryLocalDomainRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LocalDomain", data);
    return promise.then((data) => QueryLocalDomainResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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

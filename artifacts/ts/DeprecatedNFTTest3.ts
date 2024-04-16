/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
} from "@alephium/web3";
import { default as DeprecatedNFTTest3ContractJson } from "../nft/DeprecatedNFTTest3.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace DeprecatedNFTTest3Types {
  export type Fields = {
    collectionId: HexString;
    uri: HexString;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };

  export interface SignExecuteMethodTable {
    returnNothing: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  DeprecatedNFTTest3Instance,
  DeprecatedNFTTest3Types.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as DeprecatedNFTTest3Types.Fields;
  }

  at(address: string): DeprecatedNFTTest3Instance {
    return new DeprecatedNFTTest3Instance(address);
  }

  tests = {
    getTokenUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest3Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getTokenUri", params);
    },
    returnNothing: async (
      params: Omit<
        TestContractParamsWithoutMaps<DeprecatedNFTTest3Types.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "returnNothing", params);
    },
  };
}

// Use this object to test and deploy the contract
export const DeprecatedNFTTest3 = new Factory(
  Contract.fromJson(
    DeprecatedNFTTest3ContractJson,
    "",
    "75181639c8575ce108d1ecb0b1b73a373a8652ffe6f5f6621d9f9eee5a0b2eb4",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class DeprecatedNFTTest3Instance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DeprecatedNFTTest3Types.State> {
    return fetchContractState(DeprecatedNFTTest3, this);
  }

  methods = {
    getTokenUri: async (
      params?: DeprecatedNFTTest3Types.CallMethodParams<"getTokenUri">
    ): Promise<DeprecatedNFTTest3Types.CallMethodResult<"getTokenUri">> => {
      return callMethod(
        DeprecatedNFTTest3,
        this,
        "getTokenUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    returnNothing: async (
      params: DeprecatedNFTTest3Types.SignExecuteMethodParams<"returnNothing">
    ): Promise<
      DeprecatedNFTTest3Types.SignExecuteMethodResult<"returnNothing">
    > => {
      return signExecuteMethod(
        DeprecatedNFTTest3,
        this,
        "returnNothing",
        params
      );
    },
  };

  async multicall<Calls extends DeprecatedNFTTest3Types.MultiCallParams>(
    calls: Calls
  ): Promise<DeprecatedNFTTest3Types.MultiCallResults<Calls>> {
    return (await multicallMethods(
      DeprecatedNFTTest3,
      this,
      calls,
      getContractByCodeHash
    )) as DeprecatedNFTTest3Types.MultiCallResults<Calls>;
  }
}

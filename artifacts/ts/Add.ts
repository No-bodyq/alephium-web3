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
import { default as AddContractJson } from "../add/Add.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace AddTypes {
  export type Fields = {
    sub: HexString;
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export type AddEvent = ContractEvent<{ x: bigint; y: bigint }>;
  export type Add1Event = ContractEvent<{ a: bigint; b: bigint }>;

  export interface CallMethodTable {
    add: {
      params: CallContractParams<{ array: [bigint, bigint] }>;
      result: CallContractResult<[bigint, bigint]>;
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
    createSubContract: {
      params: SignExecuteContractMethodParams<{
        a: bigint;
        path: HexString;
        subContractId: HexString;
        payer: Address;
      }>;
      result: SignExecuteScriptTxResult;
    };
    destroy: {
      params: SignExecuteContractMethodParams<{ caller: Address }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<AddInstance, AddTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as AddTypes.Fields;
  }

  eventIndex = { Add: 0, Add1: 1 };

  at(address: string): AddInstance {
    return new AddInstance(address);
  }

  tests = {
    add: async (
      params: TestContractParamsWithoutMaps<
        AddTypes.Fields,
        { array: [bigint, bigint] }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint]>> => {
      return testMethod(this, "add", params);
    },
    addPrivate: async (
      params: TestContractParamsWithoutMaps<
        AddTypes.Fields,
        { array: [bigint, bigint] }
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, bigint]>> => {
      return testMethod(this, "addPrivate", params);
    },
    createSubContract: async (
      params: TestContractParamsWithoutMaps<
        AddTypes.Fields,
        { a: bigint; path: HexString; subContractId: HexString; payer: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "createSubContract", params);
    },
    destroy: async (
      params: TestContractParamsWithoutMaps<
        AddTypes.Fields,
        { caller: Address }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "destroy", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Add = new Factory(
  Contract.fromJson(
    AddContractJson,
    "=8+4=1-1=2-1=1+3=2-2+6c=37+77e010a=1+1646450726976617465=152",
    "6d87d293224fce4601a8e315e6a384aca46fdd1adab1402ffae8cc454b94a66e",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class AddInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<AddTypes.State> {
    return fetchContractState(Add, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeAddEvent(
    options: EventSubscribeOptions<AddTypes.AddEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Add.contract,
      this,
      options,
      "Add",
      fromCount
    );
  }

  subscribeAdd1Event(
    options: EventSubscribeOptions<AddTypes.Add1Event>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Add.contract,
      this,
      options,
      "Add1",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<AddTypes.AddEvent | AddTypes.Add1Event>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(Add.contract, this, options, fromCount);
  }

  methods = {
    add: async (
      params: AddTypes.CallMethodParams<"add">
    ): Promise<AddTypes.CallMethodResult<"add">> => {
      return callMethod(Add, this, "add", params, getContractByCodeHash);
    },
    createSubContract: async (
      params: AddTypes.SignExecuteMethodParams<"createSubContract">
    ): Promise<AddTypes.SignExecuteMethodResult<"createSubContract">> => {
      return signExecuteMethod(Add, this, "createSubContract", params);
    },
    destroy: async (
      params: AddTypes.SignExecuteMethodParams<"destroy">
    ): Promise<AddTypes.SignExecuteMethodResult<"destroy">> => {
      return signExecuteMethod(Add, this, "destroy", params);
    },
  };

  async multicall<Calls extends AddTypes.MultiCallParams>(
    calls: Calls
  ): Promise<AddTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Add,
      this,
      calls,
      getContractByCodeHash
    )) as AddTypes.MultiCallResults<Calls>;
  }
}

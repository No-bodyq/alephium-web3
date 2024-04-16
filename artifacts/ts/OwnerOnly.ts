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
import { default as OwnerOnlyContractJson } from "../test/OwnerOnly.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace OwnerOnlyTypes {
  export type Fields = {
    owner: Address;
  };

  export type State = ContractState<Fields>;

  export interface SignExecuteMethodTable {
    testOwner: {
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
  OwnerOnlyInstance,
  OwnerOnlyTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as OwnerOnlyTypes.Fields;
  }

  at(address: string): OwnerOnlyInstance {
    return new OwnerOnlyInstance(address);
  }

  tests = {
    testOwner: async (
      params: Omit<
        TestContractParamsWithoutMaps<OwnerOnlyTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "testOwner", params);
    },
  };
}

// Use this object to test and deploy the contract
export const OwnerOnly = new Factory(
  Contract.fromJson(
    OwnerOnlyContractJson,
    "",
    "c21e66486f3fa9f78555b71d30ba1ffd2f5a4bf8624647b97ed3748db20e295a",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class OwnerOnlyInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<OwnerOnlyTypes.State> {
    return fetchContractState(OwnerOnly, this);
  }

  methods = {
    testOwner: async (
      params: OwnerOnlyTypes.SignExecuteMethodParams<"testOwner">
    ): Promise<OwnerOnlyTypes.SignExecuteMethodResult<"testOwner">> => {
      return signExecuteMethod(OwnerOnly, this, "testOwner", params);
    },
  };
}

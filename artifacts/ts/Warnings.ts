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
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as WarningsContractJson } from "../test/Warnings.ral.json";
import { getContractByCodeHash } from "./contracts";
import {
  AddStruct1,
  AddStruct2,
  Balances,
  MapValue,
  TokenBalance,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace WarningsTypes {
  export type Fields = {
    a: bigint;
    b: bigint;
  };

  export type State = ContractState<Fields>;
}

class Factory extends ContractFactory<WarningsInstance, WarningsTypes.Fields> {
  encodeFields(fields: WarningsTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as WarningsTypes.Fields;
  }

  consts = { C: BigInt(0) };

  at(address: string): WarningsInstance {
    return new WarningsInstance(address);
  }

  tests = {
    foo: async (
      params: TestContractParamsWithoutMaps<
        WarningsTypes.Fields,
        { x: bigint; y: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "foo", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const Warnings = new Factory(
  Contract.fromJson(
    WarningsContractJson,
    "",
    "873e095edb39cdb4b11b1157003daeacad06d259a938cd270e22b8e89b75feea",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class WarningsInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<WarningsTypes.State> {
    return fetchContractState(Warnings, this);
  }
}

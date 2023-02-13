/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  web3,
  SignerProvider,
  Address,
  Token,
  toApiVals,
  SignDeployContractTxResult,
  Contract,
  ContractState,
  node,
  binToHex,
  TestContractResult,
  InputAsset,
  Asset,
  HexString,
  contractIdFromAddress,
  fromApiArray,
  ONE_ALPH,
  groupOfAddress,
} from "@alephium/web3";
import { default as WarningsContractJson } from "../test/warnings.ral.json";

export namespace Warnings {
  export type Fields = {
    a: bigint;
    b: bigint;
  };

  export type State = Fields & Omit<ContractState, "fields">;

  export async function deploy(
    signer: SignerProvider,
    initFields: Fields,
    deployParams?: {
      initialAttoAlphAmount?: bigint;
      initialTokenAmounts?: Token[];
      issueTokenAmount?: bigint;
      gasAmount?: number;
      gasPrice?: bigint;
    }
  ): Promise<SignDeployContractTxResult & { instance: WarningsInstance }> {
    const deployResult = await artifact.deploy(signer, {
      initialFields: initFields,
      initialAttoAlphAmount: deployParams?.initialAttoAlphAmount,
      initialTokenAmounts: deployParams?.initialTokenAmounts,
      issueTokenAmount: deployParams?.issueTokenAmount,
      gasAmount: deployParams?.gasAmount,
      gasPrice: deployParams?.gasPrice,
    });
    const instance = at(deployResult.contractAddress);
    return { instance: instance, ...deployResult };
  }

  export function at(address: string): WarningsInstance {
    return new WarningsInstance(address);
  }

  // This is used for testing contract functions
  export function stateForTest(
    initFields: Fields,
    asset?: Asset,
    address?: string
  ): ContractState {
    const newAsset = {
      alphAmount: asset?.alphAmount ?? ONE_ALPH,
      tokens: asset?.tokens,
    };
    return Warnings.artifact.toState(initFields, newAsset, address);
  }

  export async function testFooMethod(
    args: { x: bigint; y: bigint },
    initFields: Fields,
    testParams?: {
      group?: number;
      address?: string;
      initialAsset?: Asset;
      existingContracts?: ContractState[];
      inputAssets?: InputAsset[];
    }
  ): Promise<Omit<TestContractResult, "returns"> & { returns: [] }> {
    const initialAsset = {
      alphAmount: testParams?.initialAsset?.alphAmount ?? ONE_ALPH,
      tokens: testParams?.initialAsset?.tokens,
    };
    const _testParams = {
      ...testParams,
      testMethodIndex: 0,
      testArgs: args,
      initialFields: initFields,
      initialAsset: initialAsset,
    };
    const testResult = await artifact.testPublicMethod("foo", _testParams);
    return { ...testResult, returns: testResult.returns as [] };
  }

  export const artifact = Contract.fromJson(WarningsContractJson);
}

export class WarningsInstance {
  readonly address: Address;
  readonly contractId: string;
  readonly groupIndex: number;

  constructor(address: Address) {
    this.address = address;
    this.contractId = binToHex(contractIdFromAddress(address));
    this.groupIndex = groupOfAddress(address);
  }

  async fetchState(): Promise<Warnings.State> {
    const state = await Warnings.artifact.fetchState(
      this.address,
      this.groupIndex
    );
    return {
      ...state,
      a: state.fields["a"] as bigint,
      b: state.fields["b"] as bigint,
    };
  }
}

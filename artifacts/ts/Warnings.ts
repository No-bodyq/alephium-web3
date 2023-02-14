/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  web3,
  SignerProvider,
  Address,
  DeployContractParams,
  DeployContractResult,
  Contract,
  ContractState,
  node,
  binToHex,
  TestContractResult,
  Asset,
  HexString,
  ContractFactory,
  contractIdFromAddress,
  ONE_ALPH,
  groupOfAddress,
  fromApiVals,
  subscribeToEvents,
  SubscribeOptions,
  Subscription,
  EventSubscription,
  randomTxId,
  CallContractParams,
  CallContractResult,
  TestContractParams,
} from "@alephium/web3";
import { default as WarningsContractJson } from "../test/warnings.ral.json";

export namespace Warnings {
  export type Fields = {
    a: bigint;
    b: bigint;
  };

  export type State = ContractState<Fields>;

  export type ContractCreatedEvent = {
    contractAddress: string;
    blockHash: string;
    txId: string;
    eventIndex: number;
    name: string;
    fields: { address: HexString };
  };

  export type ContractDestroyedEvent = {
    contractAddress: string;
    blockHash: string;
    txId: string;
    eventIndex: number;
    name: string;
    fields: { address: HexString };
  };

  export class Factory extends ContractFactory<WarningsInstance, Fields> {
    constructor(contract: Contract) {
      super(contract);
    }

    async deploy(
      signer: SignerProvider,
      deployParams: DeployContractParams<Fields>
    ): Promise<DeployContractResult<WarningsInstance>> {
      const signerParams = await contract.txParamsForDeployment(
        signer,
        deployParams
      );
      const result = await signer.signAndSubmitDeployContractTx(signerParams);
      return {
        instance: this.at(result.contractAddress),
        groupIndex: result.fromGroup,
        contractId: result.contractId,
        contractAddress: result.contractAddress,
        unsignedTx: result.unsignedTx,
        txId: result.txId,
        signature: result.signature,
        gasAmount: result.gasAmount,
        gasPrice: result.gasPrice,
      };
    }

    at(address: string): WarningsInstance {
      return new WarningsInstance(address);
    }
  }

  // This is used for testing contract functions
  export function stateForTest(
    initFields: Fields,
    asset?: Asset,
    address?: string
  ): ContractState<Warnings.Fields> {
    const newAsset = {
      alphAmount: asset?.alphAmount ?? ONE_ALPH,
      tokens: asset?.tokens,
    };
    return Warnings.contract.toState(initFields, newAsset, address);
  }

  export async function testFooMethod(
    params: TestContractParams<Warnings.Fields, { x: bigint; y: bigint }>
  ): Promise<Omit<TestContractResult, "returns">> {
    const txId = params?.txId ?? randomTxId();
    const apiParams = Warnings.contract.toApiTestContractParams("foo", {
      ...params,
      txId: txId,
    });
    const apiResult = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsTestContract(apiParams);
    const testResult = await Warnings.contract.fromApiTestContractResult(
      0,
      apiResult,
      txId
    );
    Warnings.contract.printDebugMessages("foo", testResult.debugMessages);

    return {
      ...testResult,
    };
  }

  export const contract = Contract.fromJson(
    WarningsContractJson,
    "",
    "9a0c90d67d729a478062d6794cf7b75c27483c50f6fe2ad13c5ed8873ad1fde2"
  );
  export const factory = new Factory(contract);
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
    const contractState = await web3
      .getCurrentNodeProvider()
      .contracts.getContractsAddressState(this.address, {
        group: this.groupIndex,
      });
    const state = Warnings.contract.fromApiContractState(contractState);
    return {
      ...state,
      fields: state.fields as Warnings.Fields,
    };
  }

  private decodeContractCreatedEvent(
    event: node.ContractEvent
  ): Warnings.ContractCreatedEvent {
    if (event.eventIndex !== -1) {
      throw new Error(
        "Invalid event index: " + event.eventIndex + ", expected: -1"
      );
    }
    const fields = fromApiVals(event.fields, ["address"], ["Address"]);
    return {
      contractAddress: this.address,
      blockHash: event.blockHash,
      txId: event.txId,
      eventIndex: event.eventIndex,
      name: "ContractCreated",
      fields: { address: fields["address"] as HexString },
    };
  }

  subscribeContractCreatedEvent(
    options: SubscribeOptions<Warnings.ContractCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    const messageCallback = (event: node.ContractEvent): Promise<void> => {
      if (event.eventIndex !== -1) {
        return Promise.resolve();
      }
      return options.messageCallback(this.decodeContractCreatedEvent(event));
    };

    const errorCallback = (
      err: any,
      subscription: Subscription<node.ContractEvent>
    ): Promise<void> => {
      return options.errorCallback(
        err,
        subscription as unknown as Subscription<Warnings.ContractCreatedEvent>
      );
    };
    const opt: SubscribeOptions<node.ContractEvent> = {
      pollingInterval: options.pollingInterval,
      messageCallback: messageCallback,
      errorCallback: errorCallback,
    };
    return subscribeToEvents(opt, this.address, fromCount);
  }

  private decodeContractDestroyedEvent(
    event: node.ContractEvent
  ): Warnings.ContractDestroyedEvent {
    if (event.eventIndex !== -2) {
      throw new Error(
        "Invalid event index: " + event.eventIndex + ", expected: -2"
      );
    }
    const fields = fromApiVals(event.fields, ["address"], ["Address"]);
    return {
      contractAddress: this.address,
      blockHash: event.blockHash,
      txId: event.txId,
      eventIndex: event.eventIndex,
      name: "ContractDestroyed",
      fields: { address: fields["address"] as HexString },
    };
  }

  subscribeContractDestroyedEvent(
    options: SubscribeOptions<Warnings.ContractDestroyedEvent>,
    fromCount?: number
  ): EventSubscription {
    const messageCallback = (event: node.ContractEvent): Promise<void> => {
      if (event.eventIndex !== -2) {
        return Promise.resolve();
      }
      return options.messageCallback(this.decodeContractDestroyedEvent(event));
    };

    const errorCallback = (
      err: any,
      subscription: Subscription<node.ContractEvent>
    ): Promise<void> => {
      return options.errorCallback(
        err,
        subscription as unknown as Subscription<Warnings.ContractDestroyedEvent>
      );
    };
    const opt: SubscribeOptions<node.ContractEvent> = {
      pollingInterval: options.pollingInterval,
      messageCallback: messageCallback,
      errorCallback: errorCallback,
    };
    return subscribeToEvents(opt, this.address, fromCount);
  }

  subscribeEvents(
    options: SubscribeOptions<
      Warnings.ContractCreatedEvent | Warnings.ContractDestroyedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    const messageCallback = (event: node.ContractEvent): Promise<void> => {
      switch (event.eventIndex) {
        case -1: {
          return options.messageCallback(
            this.decodeContractCreatedEvent(event)
          );
        }

        case -2: {
          return options.messageCallback(
            this.decodeContractDestroyedEvent(event)
          );
        }

        default:
          throw new Error("Invalid event index: " + event.eventIndex);
      }
    };

    const errorCallback = (
      err: any,
      subscription: Subscription<node.ContractEvent>
    ): Promise<void> => {
      return options.errorCallback(
        err,
        subscription as unknown as Subscription<
          Warnings.ContractCreatedEvent | Warnings.ContractDestroyedEvent
        >
      );
    };
    const opt: SubscribeOptions<node.ContractEvent> = {
      pollingInterval: options.pollingInterval,
      messageCallback: messageCallback,
      errorCallback: errorCallback,
    };
    return subscribeToEvents(opt, this.address, fromCount);
  }
}

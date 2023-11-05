/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/
import { Parser } from 'binary-parser'
import { AssetInput } from '../api/api-alephium'
import { binToHex } from '@alephium/web3'
import { unlockScriptCodec } from './unlock-script-codec'
import { Codec } from './codec'
import { intCodec } from './int-codec'

export class InputCodec implements Codec<any> {
  parser = Parser.start()
    .nest('outputRef', {
      type: Parser.start().int32('hint').buffer('key', { length: 32 })
    })
    .nest('unlockScript', {
      type: unlockScriptCodec.parser
    })

  encode(input: any): Buffer {
    return Buffer.concat([
      Buffer.from([...intCodec.encode(input.outputRef.hint), ...input.outputRef.key]),
      unlockScriptCodec.encode(input.unlockScript)
    ])
  }

  decode(input: Buffer): any {
    return this.parser.parse(input)
  }

  static convertToAssetInputs(inputs: any[]): AssetInput[] {
    return inputs.map((input) => {
      const hint = input.outputRef.hint
      const key = binToHex(input.outputRef.key)
      const unlockScript = unlockScriptCodec.encode(input.unlockScript)
      return {
        outputRef: { hint, key },
        unlockScript: unlockScript.toString('hex')
      }
    })
  }
}

export const inputCodec = new InputCodec()

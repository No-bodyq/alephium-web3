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
import { compactIntCodec } from './compact-int-codec'
import { Codec } from './codec'

export class ByteStringCodec implements Codec<any> {
  parser = new Parser()
    .nest('length', {
      type: compactIntCodec.parser
    })
    .buffer('value', {
      length: function (ctx) {
        return compactIntCodec.toInt(this['length']! as any as { mode: number; rest: Uint8Array })
      }
    })

  encode(input: any): Buffer {
    return Buffer.from([...compactIntCodec.encode(input.length), ...input.value])
  }

  decode(input: Buffer): any {
    return this.parser.parse(input)
  }
}

export const byteStringCodec = new ByteStringCodec()

import { RuleOutput } from '../types/Rule'

export function minLength(input: string, minLength: number): RuleOutput {
  return {
    id: 'minLength',
    name: 'Min Length',
    message: null,
    passed: input.length > minLength
  }
}

const ids: number[] = [1, 2, 4]
const specialIds: [number, string, string] = [767, '_masud', '_jobaer']



enum Responses {
    Success = 'SUCCESS',
    Pending = 'PENDING',
    Failed = 'FAILED',
}
// type Responses = {

// }
const apiRes: Responses = Responses.Success;
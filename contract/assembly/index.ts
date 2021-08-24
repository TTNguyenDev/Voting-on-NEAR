import { logging, PersistentMap } from 'near-sdk-as'

const CandidateURL = new PersistentMap<string, string>('c');
const CandidatePair = new PersistentMap<string, string[]>('cp');
const PromptArray = new PersistentMap<string, string[]>('p');
const VoteArray = new PersistentMap<string, i32[]>('v');
const UserParticipation = new PersistentMap<string, string[]>('u');

/***************
 * VIEW METHOD *
 ***************/
export function getUrl(_name: string): string {
    if(CandidateURL.contains(_name)) {
        return CandidateURL.getSome(_name);
    } else {
        logging.log('Can\'t find the user');
        return ''
    }
}

export function didParticipate(_prompt: string, _user: string): bool {
    if (UserParticipation.getSome(_prompt)) {
        let arr = UserParticipation.getSome(_prompt);
        return arr.includes(_user);
    } else {
        return false;
    }
}

export function getAllPrompt(): string[] {
    if (PromptArray.contains('AllArrays')) {
       return PromptArray.getSome('AllArrays');
    } 
    logging.log('no prompt found');
    return []; 
}

export function getVotes(_prompt: string): i32[] {
    if (VoteArray.contains(_prompt)) {
        return VoteArray.getSome(_prompt);
    }
    logging.log('No Votes Found');
    return [0, 0];
} 





/*****************
 * MODIFY METHOD *
 *****************/
export function addUrl(_name: string, _url: string): void {
    CandidateURL.set(_name, _url);
    logging.log('added url for ' + _name);
}

export function addCandidatePair(_prompt: string,_firstName: string, _secondName: string): void {
    CandidatePair.set(_prompt, [_firstName, _secondName]);
    logging.log('add candidate pair ' + _firstName + ' ' + _secondName);
}

export function addVote(_prompt: string, index: i32): void {
    if (VoteArray.contains(_prompt)) {
        let arr = VoteArray.getSome(_prompt);
        let val = arr[index];
        let newVal = val + 1;
        arr[index] = newVal;
        VoteArray.set(_prompt, arr);
    } else {
        let newArr = [0, 0];
        newArr[index] = 1;
        VoteArray.set(_prompt, newArr);
    }
}

export function recordUser(_prompt: string, _user: string): void {
    if (UserParticipation.contains(_prompt)) {
        let users = UserParticipation.getSome(_prompt);
        users.push(_user);
        UserParticipation.set(_prompt, users);
    } else {
        UserParticipation.set(_prompt, [_user]);
    }
}

export function addToPromptArray(_prompt: string): void {
    logging.log('added to prompt array');
    if (PromptArray.contains("AllArrays")) {
        let arr = PromptArray.getSome('AllArrays');
        arr.push(_prompt);
    } else {
        PromptArray.set("AllArrays", [_prompt]);
    }
}

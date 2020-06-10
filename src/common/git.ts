import * as child_process from "child_process"

let commit_id = "{commit}"
export function getCommitID(){
    if(commit_id === "{" + "commit}"){
        try{
            return commit_id = child_process.execSync("git rev-parse HEAD").toString()
        }catch(e){
            console.error(e)
            return "{Unknown}"
        }
    }else{
        return commit_id
    }
}
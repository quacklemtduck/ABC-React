import React from 'react'
import styles from './Familytree.module.css'
import PersonBubble from './PersonBubble';
import { ShowPopup } from './PopupInfo';

function compareAges(a, b){
    return b.Age - a.Age
}

function ErrorMessage(){
    return (
        <div><h1>An error has occured, check the console for more info.</h1></div>
    )
}



export default function Familytree(props){
    let members = [...props.members].sort(compareAges);


    function getTree(member){
        if(members.includes(member)){
        members = members.filter(m => m !== member)
        return (
            <div key={member.Name} className={styles.treeSection}>
                <div className={styles.treeParent}>
                    <PersonBubble person={member}/>
                </div>
                <div className={styles.treeChild}>
                    {member.Children.map((c, i) => {
                        let direction = (i % 2 === 0) ? "left" : "right";
                        let flexDirection = (i % 2 === 0) ? "flex-end" : "normal";
                        let singleLine = (member.Children.length === 1) ? "1px" : "50%";
                        if (member.Children.length === 1) {
                            flexDirection = "center"
                        }
                        return (<div key={i} className={styles.childContainer} style={{width:"100%", alignItems: flexDirection}}>
                        
                        <div style={{background: `linear-gradient(to top ${direction}, #fff calc(50% - 1px), #aaa, #fff calc(50% + 1px) )`, width: singleLine, height: "50px"}}></div>

                        {getTree(c)}
                        
                        </div>)
                        })}
                </div>
            </div>
        )
        }else{
            console.error(`Encountered child named ${member.Name} that has either already been rendered or is not part of the tree, ignoring`)
            return (
                <div className={styles.treeSection}>
                <div className={styles.treeParent}>
                       <button onClick={() => ShowPopup(ErrorMessage())} className={styles.errorBubble}>
                            <p className={styles.letter}>!</p>
                       </button> 
                       </div>
                </div>
            )
        }
    }


    let memberorbs = [getTree(members[0])]

    while(members.length !== 0){
        memberorbs.push(getTree(members[0]))
    }

    return(
    <div className={styles.familyTreeContainer}>
        {memberorbs.map((m) => m)}
    </div>
    )
}
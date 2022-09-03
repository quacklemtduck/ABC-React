import React from 'react'
import styles from './Familytree.module.css'
import PersonBubble from './PersonBubble';

function compareAges(a, b){
    return b.Age - a.Age
}



export default function Familytree(props){
    let members = props.members.sort(compareAges);


    function getTree(member){
        if(members.includes(member)){
        members = members.filter(m => m !== member)
        return (
            <div key={member.Name} className={styles.treeSection}>
                <div className={styles.treeParent}>
                    <PersonBubble person={member}/>
                </div>
                <div className={styles.treeChild}>
                    {member.Children.map((c) => getTree(c))}
                </div>
            </div>
        )
        }else{
            console.error(`Encountered child named ${member.Name} that has either already been rendered or is not part of the tree, ignoring`)
            return
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
import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import Styles from './CheckBox.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);
// function CheckBox({children, checked, ...rest}) {
//     return(
//         <div className={Styles.checkbox}>
//             <label>
//                 <input type="checkbox" checked = {checked} {...rest} />
//                 <div className={Styles.icon}>
//                     {checked ? (
//                     <MdCheckBox className={Styles.checked}/>
//                     ) : (
//                     <MdCheckBoxOutlineBlank className={Styles.checked}/>)}
//                 </div>
//             </label>
//             <span>{children}</span>
//         </div>
//     )
// }
function CheckBox({children, checked, ...rest}) {
    return(
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked = {checked} {...rest} />
                <div className={cx('icon')}>
                    {checked ? (
                    <MdCheckBox className={cx('checked')}/>
                    ) : (
                    <MdCheckBoxOutlineBlank className={cx('checked')}/>)}
                </div>
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;
import React, {FC} from 'react';

interface Props {
    title: string;
}
const SectionTitle: FC<Props> = ({title}) => {
    return (
        <div className="section__title">
            {title}
        </div>
    );
};

export default SectionTitle;

import React from 'react'

import {
    Info as InfoIcon,
    TrendingUp as TrendingUpIcon,
    TrendingDown as TrendingDownIcon,
    HourglassEmpty as HourglassEmptyIcon,
    Block as BlockIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    DeleteOutline as DeleteOutlineIcon,
    Check as CheckIcon
} from '@material-ui/icons'

export default function RecordsTable(props) {

    const maskRecordValue = (value) => {
        let valueAsString = `${value}`;
        valueAsString = valueAsString.replace(".", ",");
        return `R$ ${valueAsString}`;
    };

    return (
        <table className="table table-hover table-bordered">
            <thead className="bg-primary text-light">
                <tr className="text-center">
                    <th colSpan={2} scope="col">Item</th>
                    <th colSpan={1} scope="col">Valor</th>
                    <th colSpan={1} scope="col">Mês/Ano</th>
                    <th colSpan={1} scope="col">Status</th>
                    <th colSpan={2} scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.records.map(function (record) {
                        return (
                            <tr key={record.id} className="text-center">
                                <td colSpan={2}>
                                    {
                                        record.type == "INCOME" ?
                                            <TrendingUpIcon className="text-success" /> :
                                            <TrendingDownIcon className="text-danger" />
                                    }
                                    &nbsp;&nbsp;
                                    {record.description}
                                </td>
                                <td colSpan={1}>{maskRecordValue(record.value)}</td>
                                <td colSpan={1}>{`${record.month}/${record.year}`}</td>

                                <td colSpan={1}>
                                    {
                                        {
                                            'PENDANT': <HourglassEmptyIcon className="text-info" />,
                                            'CANCELLED': <BlockIcon className="text-danger" />,
                                            'ACCEPTED': <DoneIcon className="text-success" />
                                        }[record.status]
                                    }
                                </td>
                                <td colSpan={2} className="text-center">
                                    <div className="btn-group btn-group-sm">
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Selecione
                                        </button>
                                        <div className="dropdown-menu">
                                            {
                                                record.status !== "ACCEPTED" &&
                                                <a className="dropdown-item text-dark" href="#" data-toggle="modal" data-target={`#${props.approvationModalId}`} onClick={(ev) => props.setActionTarget(record.id)}>
                                                    <CheckIcon />&nbsp;Aprovar
                                                </a>
                                            }
                                            {
                                                record.status !== "CANCELLED" &&
                                                <a className="dropdown-item text-dark" href="#" data-toggle="modal" data-target={`#${props.cancellationModalId}`} onClick={(ev) => props.setActionTarget(record.id)}>
                                                    <BlockIcon />&nbsp;Bloquear
                                                </a>
                                            }
                                            <a className="dropdown-item text-dark" href={`#/registros-financeiros/editar/${record.id}`}>
                                                <EditIcon />&nbsp;Editar
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item text-danger" href="#" data-toggle="modal" data-target={`#${props.deletionModalId}`} onClick={(ev) => props.setActionTarget(record.id)}>
                                                <DeleteOutlineIcon />&nbsp;Apagar
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })
                }
                {
                    props.records.length === 0 &&
                    <tr>
                        <td colSpan={7} className="text-center">
                            <InfoIcon className="text-primary" />
                            &nbsp;&nbsp;
                            <span>Nenhum registro</span>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    )
};
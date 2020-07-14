import React, { useState, useEffect } from 'react'

import './RecordsPagination.css'

export default function RecordsPagination(props) {
    const [pages, setPages] = useState([]);

    const createBackButtons = (pagination) => {
        const backButtons = [];

        // Add first page and previous page buttons?
        if (pagination.pageIndex > 1) {
            backButtons.push({
                id: "first-page-btn",
                key: "first-page-btn",
                actual: false,
                title: "Ir para a primeira página",
                page: 1,
                label: "<<"
            });

            backButtons.push({
                id: "previous-page-btn",
                key: "previous-page-btn",
                actual: false,
                title: "Ir para a página anterior",
                page: pagination.pageIndex - 1,
                label: "<"
            });
        }

        return backButtons;
    };

    const createPageButtons = (pagination) => {
        let pageButtons = [];
        let goBack = true;
        let firstPage = pagination.pageIndex - 2;
        let lastPage = pagination.pageIndex + 2;

        if (firstPage < 1) {
            // Try to create more buttons at right
            let increment = firstPage *= -1;
            increment ++;

            // Start with first page
            firstPage = 1;

            // I can't create more buttons at left
            goBack = false;

            // Try to create more buttons at right
            lastPage += increment;
        }

        if (lastPage > pagination.totalPages) {
            // Try to create more buttons at left
            let decrement = lastPage - pagination.totalPages;

            // Set the last button as the maximum page number
            lastPage = pagination.totalPages;

            // Can I create more buttons at left?
            if (goBack) {
                // Can I create all remaining links to the left?
                if ((firstPage - decrement) >= 1) {
                    firstPage -= decrement;
                } else {
                    // I can't create all remaining links to the left
                    firstPage = 1;
                }
            }
        }

        for (let i= firstPage ; i<= lastPage ; i++) {
            pageButtons.push({
                id: `page-${i}-btn`,
                key: `page-${i}-btn`,
                actual: i === pagination.pageIndex,
                title: `Ir para a página ${i}`,
                page: i,
                label: i
            });
        }

        return pageButtons;
    };

    const createNextButtons = (pagination) => {
        let nextButtons = [];

        if (pagination.pageIndex < pagination.totalPages) {
            nextButtons.push({
                id: "next-page-btn",
                key: "next-page-btn",
                actual: false,
                title: "Ir para a próxima página",
                page: pagination.pageIndex + 1,
                label: ">"
            });

            nextButtons.push({
                id: "last-page-btn",
                key: "last-page-btn",
                actual: false,
                title: "Ir para a última página",
                page: pagination.totalPages,
                label: ">>"
            });
        }

        return nextButtons;
    };

    // Run after any property change
    useEffect(() => {
        const pagination = props.pagination;
        if (pagination.totalPages > 1) {
            let buttons = createBackButtons(pagination);
            buttons = buttons.concat(createPageButtons(pagination));
            buttons = buttons.concat(createNextButtons(pagination));
            setPages(buttons);
        } else {
            setPages([]);
        }
    }, [props.pagination]);

    return (
        <div className="text-center">
            <div className="pagination-buttons">
                {
                    pages.map(page => {
                        return (
                            <button
                                id={page.id}
                                key={page.id}
                                className={`btn btn-sm ${page.actual ? "btn-primary" : "btn-outline-primary"}`}
                                title={page.title}
                                disabled={page.actual}
                                onClick={ev => props.changePage(page.page)}
                            >
                                {page.label}
                            </button>
                        )
                    })
                }
            </div>
            <small className="font-weight-bold">Exibindo {props.pagination.pageItems} de {props.pagination.totalItems} registro(s).</small>
        </div>
    )
};
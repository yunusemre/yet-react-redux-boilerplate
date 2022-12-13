import { memo, useMemo } from 'react';
import { Alert } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from 'react-bootstrap-table2-paginator';
import UiBox from '../container';

const TableComponent = ({ data, columns, alert, options, ...tableProps }: any) => {
  const tableData = useMemo(() => data ?? [], [data]);
  const tableOptions = {
    paginationSize: 10,
    pageStartIndex: 1,
    custom: true,
    firstPageText: 'İlk',
    prePageText: 'Geri',
    nextPageText: '»',
    lastPageText: 'Son',
    nextPageTitle: 'İlk Sayfa',
    prePageTitle: 'Önceki Sayfa',
    firstPageTitle: 'Sonraki sayfa',
    lastPageTitle: 'Son sayfa',
    disablePageTitle: true,
    totalSize: data?.length ?? 0,
    ...options,
  };
  return (
    <UiBox className="filter-table mt-4">
      {alert && data?.length === 0 && (
        <Alert variant="warning" className="alert-soft-warning">
          <i className="fa-solid fa-circle-exclamation me-1"></i> Herhangi bir sonuç bulunamadı
        </Alert>
      )}
      {data?.length > 0 && (
        <PaginationProvider pagination={paginationFactory(tableOptions)}>
          {({ paginationProps, paginationTableProps }) => (
            <div>
              <BootstrapTable
                {...paginationTableProps}
                bordered={false}
                hover={true}
                keyField="id"
                data={tableData}
                columns={columns}
                {...tableProps}
              />
              <UiBox className="d-flex justify-content-between">
                <span className="mt-2 text-muted">Toplam: {tableData.length}</span>
                <PaginationListStandalone {...paginationProps} />
              </UiBox>
            </div>
          )}
        </PaginationProvider>
      )}
    </UiBox>
  );
};

const UiTable = memo(TableComponent);
export default UiTable;

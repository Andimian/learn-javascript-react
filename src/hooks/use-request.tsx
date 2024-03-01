import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from '../redux/ui/request';


export function useRequest(thunk, ...params) {
	const [request, setRequest] = useState(null);

	const requestStatus = useSelector((state ) =>
		selectStatus(state, request.requestId)
	);

	const dispatcn = useDispatch();

	useEffect(() => {
		const request = dispatcn(thunk(...params));
		setRequest(request);

		return () => {
			request.abort();
			setRequest(null);
		};
	}, [...params, thunk]);

	return requestStatus;
}

/* Суть такая: диспатчим наш екшен с помощью санки. В useEffect происходит выполнение запроса, сохраняется request -
* мы селектим его статус и возвращаем его. В случае если поменялись параметры, санка или компонент перестал отображаться
* - абортим старый запрос. */
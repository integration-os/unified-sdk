
export interface UnifiedOptions {
    responsePassthrough?: boolean;
    passthroughHeaders?: Record<string, string>;
    passthroughQuery?: Record<string, string>;
}

export interface ListFilter {
    createdAfter?: string;
    createdBefore?: string;
    updatedAfter?: string;
    updatedBefore?: string;
    limit?: number;
    cursor?: string;
}

export interface Pagination {
    limit?: number;
    pageSize: number;
    nextCursor?: string;
    previousCursor?: string;
}

export type PaginationHelperFetch<T> = (params: ListFilter) => Promise<ListResponse<T>>;

export interface DeleteOptions {
    modifyToken?: string;
}

export interface Count {
    count: number;
}

export interface ListResponse<Type> {
    unified: Array<Type>;
    passthrough?: any;
    pagination: Pagination;
    meta: object;
    headers: Record<string, string>;
    statusCode: number;
}

export interface Response<Type> {
    unified?: Type;
    passthrough?: any;
    meta: object;
    headers: Record<string, string>;
    statusCode: number;
}

export interface ResponseError {
    type: string;
    code: number;
    status: number;
    key: string;
    message: string;
    meta: object | null;
}

export enum HttpStatusCode {
    // 1xx Informational
    Continue = 100,
    SwitchingProtocols = 101,
    Processing = 102,

    // 2xx Success
    OK = 200,
    Created = 201,
    Accepted = 202,
    NonAuthoritativeInformation = 203,
    NoContent = 204,
    ResetContent = 205,
    PartialContent = 206,

    // 3xx Redirection
    MultipleChoices = 300,
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
    NotModified = 304,
    UseProxy = 305,
    TemporaryRedirect = 307,

    // 4xx Client Error
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    LengthRequired = 411,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    URITooLong = 414,
    UnsupportedMediaType = 415,
    RangeNotSatisfiable = 416,
    ExpectationFailed = 417,
    ImATeapot = 418,
    UnprocessableEntity = 422,
    TooManyRequests = 429,

    // 5xx Server Error
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HTTPVersionNotSupported = 505
}

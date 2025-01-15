// This file is auto-generated. Do not edit it manually.

export interface WorkExperiences { endDate?: string;
    position?: string;
    companyName?: string;
    description?: string;
    commonModel?: string;
    startDate?: string }
export interface Webhooks { format?: Format;
    isDeleted?: boolean;
    commonModel?: string;
    objects?: string[];
    modifyToken?: string;
    createdAt?: string;
    id?: string;
    events?: string[];
    address?: string;
    updatedAt?: string }
export interface Vendors { createdAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    updatedAt?: string;
    modifyToken?: string;
    outstandingBalance?: number;
    contactName?: string;
    tax?: Taxes[];
    is1099?: boolean;
    contactPhoneNumber?: string;
    website?: string;
    commonModel?: string;
    currency?: string;
    accountNumber?: string;
    address?: Addresses;
    customFields?: CustomAttributes[];
    overdueBalance?: number;
    companyName?: string;
    note?: string;
    id?: string;
    contactEmail?: string }
export interface Variants { productId?: string;
    title?: string;
    imageId?: number;
    commonModel?: string;
    weightUnit?: string;
    weight?: number;
    status?: ItemAvailabilityStatus;
    isDeleted?: boolean;
    price?: number;
    dimensions?: Dimensions;
    isActive?: boolean;
    isTaxable?: boolean;
    createdAt?: string;
    barcode?: string;
    requiresShipping?: boolean;
    updatedAt?: string;
    sku?: string;
    modifyToken?: string;
    compareAtPrice?: number;
    id?: string;
    isDefault?: boolean;
    inventoryQuantity?: number }
export interface Users { isActive?: boolean;
    middleName?: string;
    lastLogin?: string;
    phoneNumber?: string;
    updatedAt?: string;
    addresses?: Addresses[];
    socialProfiles?: SocialProfiles[];
    status?: UserStatus;
    dateOfBirth?: string;
    lastName?: string;
    preferences?: Preferences;
    email?: string;
    password?: string;
    commonModel?: string;
    sso?: SSO[];
    paymentMethod?: PaymentMethods;
    firstName?: string;
    bio?: string;
    roles?: Roles[];
    website?: string;
    gender?: Gender;
    modifyToken?: string;
    id?: string;
    createdAt?: string;
    username?: string;
    profilePicture?: Images;
    coverPhoto?: Images }
export interface UserOrGroup { identifier?: string;
    displayName?: string;
    commonModel?: string;
    type?: ParticipantType }
export interface UsageLimitExpirations { commonModel?: string;
    limit?: number;
    expirationDate?: string }
export interface Transcripts { topic?: string;
    meetingId?: string;
    id?: string;
    sentences?: Sentences[];
    updatedAt?: string;
    speakerId?: string;
    speakerName?: string;
    createdAt?: string;
    modifyToken?: string;
    commonModel?: string }
export interface Transactions { currency?: Currency;
    items?: Items[];
    amount?: number;
    recipient?: Customers;
    date?: string;
    taxExempt?: boolean;
    commonModel?: string;
    sender?: Customers;
    transactionCategory?: TransactionType;
    attachments?: Attachments[];
    modifyToken?: string;
    dispute?: Disputes;
    accountName?: string;
    foreignCurrency?: CurrencyDetails;
    shippingDetails?: ShippingDetails;
    billingDetails?: BillingDetails;
    orderId?: string;
    contact?: Contacts;
    exchangeRate?: number;
    taxAmount?: number;
    transactionMethod?: TransactionMethod;
    paymentIntent?: string;
    invoiceId?: string;
    checkNumber?: string;
    status?: FinancialTransactionStatus;
    updatedAt?: string;
    debitAmount?: number;
    description?: string;
    isDeleted?: boolean;
    paymentMethod?: PaymentMethods;
    accountId?: string;
    metadata?: Metadata;
    creditAmount?: number;
    id?: string;
    type?: FinancialTransactionType;
    refund?: Refunds;
    applicationFee?: number;
    createdAt?: string;
    accountCode?: string;
    tags?: string[] }
export interface TransactionDetails { status?: string;
    amount?: number;
    commonModel?: string;
    transactionId?: string }
export interface ToolResultContent { image?: Images;
    type?: AiMessagesContentType;
    text?: string[];
    commonModel?: string }
export interface ToolCalls { type?: ToolCallType;
    function?: unknown;
    commonModel?: string;
    modifyToken?: string;
    id?: string }
export interface TimeSession { openTime?: string;
    closeTime?: string;
    commonModel?: string }
export interface Tickets { commonModel?: string;
    title?: string;
    updatedAt?: string;
    category?: Categories;
    priority?: SupportTicketPriority;
    attachments?: Attachments[];
    comments?: Comments[];
    tags?: string[];
    customFields?: CustomAttributes[];
    admin?: Users;
    description?: string;
    modifyToken?: string;
    status?: IssueLifecycleStatus;
    dueDate?: string;
    createdAt?: string;
    type?: SupportQueryType;
    notes?: Notes[];
    id?: string;
    companyId?: string;
    typeId?: string;
    assignee?: Users;
    reporter?: Contacts }
export interface Threads { id?: string;
    lastMessageId?: string;
    commonModel?: string;
    lastHistoryId?: string;
    tags?: KeyValues[];
    messages?: Messages[];
    createdAt?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    modifyToken?: string;
    snippet?: string }
export interface Taxes { customFields?: CustomAttributes[];
    amount?: number;
    commonModel?: string;
    category?: string;
    jurisdiction?: string;
    currency?: Currency;
    updatedAt?: string;
    description?: string;
    isDeleted?: boolean;
    isTaxable?: boolean;
    region?: string;
    country?: string;
    type?: TaxType;
    rate?: number;
    createdAt?: string;
    isActive?: boolean;
    name?: string;
    id?: string;
    code?: string }
export interface TaxRates { id?: string;
    percentage?: number;
    isCompound?: boolean;
    applicableItems?: string[];
    commonModel?: string;
    description?: string;
    taxComponents?: TaxLines[];
    taxType?: string;
    taxProvider?: string;
    customFields?: CustomAttributes[];
    region?: string;
    isDeleted?: boolean;
    country?: string;
    taxNumber?: string;
    shippingIncluded?: boolean;
    displayRate?: string;
    currency?: Currency;
    modifyToken?: string;
    reportTaxType?: string;
    updatedAt?: string;
    name?: string;
    isActive?: boolean;
    createdAt?: string }
export interface TaxLines { taxCode?: string;
    isNonRecoverable?: boolean;
    isInclusive?: boolean;
    updatedAt?: string;
    commonModel?: string;
    metadata?: Metadata;
    isCompound?: boolean;
    rate?: number;
    isActive?: boolean;
    title?: string;
    name?: string;
    createdAt?: string;
    isDeleted?: boolean;
    id?: string;
    price?: number }
export interface TaxDetails { createdAt?: string;
    currency?: Currency;
    amount?: number;
    taxRegistrationNumber?: string;
    isDeleted?: boolean;
    id?: string;
    jurisdiction?: string;
    isTaxIncludedInPrice?: boolean;
    expirationDate?: string;
    taxCode?: string;
    updatedAt?: string;
    isActive?: boolean;
    region?: string;
    category?: string;
    commonModel?: string;
    country?: string;
    effectiveDate?: string;
    details?: string;
    name?: string;
    rate?: number }
export interface Tasks { createdBy?: Users;
    updatedAt?: string;
    id?: string;
    labels?: string[];
    attachments?: Attachments[];
    comments?: Comments[];
    timeLogged?: string;
    title?: string;
    createdAt?: string;
    timeEstimate?: string;
    customFields?: CustomAttributes[];
    dependOnTaskIds?: string[];
    priority?: PriorityLevel;
    dueTimezone?: string;
    repeat?: string;
    commonModel?: string;
    watchers?: Users[];
    completionPercentage?: number;
    subTaskIds?: string[];
    notifications?: Notifications[];
    status?: TaskStatus;
    parentTaskId?: string;
    dueDate?: string;
    assignee?: Users;
    modifyToken?: string;
    description?: string;
    relatedToTaskId?: string[] }
export interface Tables { fields?: Attributes[];
    databaseId?: string;
    description?: string;
    region?: string;
    type?: TableType;
    modifyToken?: string;
    projectId?: string;
    updatedAt?: string;
    createdAt?: string;
    commonModel?: string;
    id?: string;
    expiresIn?: string;
    slug?: string;
    url?: string;
    name?: string }
export interface Stores { relatedStores?: Stores[];
    language?: string;
    owner?: Users;
    latitude?: number;
    timezone?: string;
    storeArea?: number;
    isOperating?: boolean;
    country?: string;
    description?: string;
    createdAt?: string;
    socialProfiles?: SocialProfiles[];
    features?: string[];
    manager?: Staff;
    email?: string;
    currency?: Currency;
    phone?: string;
    commonModel?: string;
    longitude?: number;
    name?: string;
    websiteUrl?: string;
    id?: string;
    address?: Addresses;
    category?: string;
    updatedAt?: string;
    logoUrl?: string;
    ratings?: RatingsReviews;
    paymentMethods?: string[];
    countryCode?: string;
    businessHours?: BusinessHours[] }
export interface Staff { commonModel?: string;
    lastName?: string;
    status?: EmploymentAndCandidateStatus;
    gender?: string;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    email?: string;
    id?: string;
    createdAt?: string;
    phone?: string;
    addresses?: Addresses;
    storeID?: string;
    role?: OrganizationalRole;
    firstName?: string;
    position?: string;
    dateOfBirth?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    photoUrl?: string }
export interface Speakers { userId?: string;
    speakerId?: string;
    id?: string;
    title?: string;
    email?: string;
    name?: string;
    role?: SpeakerRole;
    commonModel?: string }
export interface SocialProfiles { email?: string;
    displayName?: string;
    additionalInfo?: Metadata;
    commonModel?: string;
    createdAt?: string;
    type?: SocialPlatform;
    url?: string;
    updatedAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    avatarUrl?: string;
    username?: string }
export interface ShippingItem { productId?: string;
    quantity?: number;
    weight?: number;
    dimensions?: Dimensions;
    weightUnit?: string;
    value?: number;
    sku?: string;
    id?: string;
    commonModel?: string;
    productName?: string }
export interface ShippingDetails { trackingNumber?: string;
    signatureRequired?: boolean;
    updatedAt?: string;
    isDeleted?: boolean;
    estimatedDelivery?: string;
    price?: number;
    isActive?: boolean;
    method?: string;
    provider?: string;
    address?: Addresses;
    commonModel?: string;
    insurance?: boolean;
    createdAt?: string }
export interface ShareholderEquityDetails { treasuryStock?: number;
    preferredStock?: number;
    retainedEarnings?: number;
    commonStock?: number;
    commonModel?: string;
    accumulatedOtherComprehensiveIncome?: number }
export interface Sentences { endTime?: string;
    commonModel?: string;
    createdAt?: string;
    speakerId?: string;
    updatedAt?: string;
    id?: string;
    sentence?: string;
    speakerName?: string;
    startTime?: string;
    modifyToken?: string }
export interface Salaries { commonModel?: string;
    currency?: Currency;
    value?: number;
    paymentPeriod?: TimeCycle }
export interface SSO { refreshToken?: string;
    createdAt?: string;
    isActive?: boolean;
    tokenType?: string;
    scopes?: string[];
    isDeleted?: boolean;
    profileUrl?: string;
    expiresIn?: number;
    expiryDate?: string;
    updatedAt?: string;
    commonModel?: string;
    provider?: IdentityProvider;
    providerUserId?: string;
    accessToken?: string }
export interface RevenueDetails { salesRevenue?: number;
    serviceRevenue?: number;
    otherRevenue?: number;
    commonModel?: string }
export interface ResponseFormat { schema?: JsonSchema;
    type?: ResponseFormatType;
    commonModel?: string }
export interface Refunds { status?: TransactionStatus;
    updatedAt?: string;
    modifyToken?: string;
    id?: string;
    paymentId?: string;
    commonModel?: string;
    amount?: number;
    createdAt?: string;
    reason?: string;
    currency?: Currency }
export interface References { companyName?: string;
    phoneNumber?: string;
    commonModel?: string;
    name?: string;
    relationship?: string;
    position?: string;
    email?: string }
export interface Records { id?: string;
    commonModel?: string;
    entity?: unknown;
    modifyToken?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Recordings { callType?: CallDirection;
    participants?: Speakers[];
    modifyToken?: string;
    startTime?: string;
    endTime?: string;
    fileSize?: number;
    files?: Attachments[];
    description?: string;
    topic?: string;
    accountId?: string;
    password?: string;
    name?: string;
    id?: string;
    hostId?: string;
    createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    duration?: number }
export interface Reactions { type?: ReactionType;
    messageId?: string;
    createdAt?: string;
    userId?: string;
    commonModel?: string;
    chatId?: string }
export interface RatingsReviews { updatedAt?: string;
    metadata?: Metadata;
    isDeleted?: boolean;
    isActive?: boolean;
    review?: string;
    reviewerName?: string;
    createdAt?: string;
    rating?: number;
    id?: string;
    locale?: string;
    status?: ReviewApprovalStatus;
    commonModel?: string;
    storeID?: string;
    verifiedPurchase?: boolean }
export interface PurchaseOrders { currency?: Currency;
    notes?: string;
    updatedAt?: string;
    commonModel?: string;
    shippingCosts?: number;
    isDeleted?: boolean;
    orderNumber?: string;
    id?: string;
    status?: OrderStatus;
    orderDate?: string;
    items?: PurchaseOrderItems[];
    shipTo?: Addresses;
    accountId?: string;
    subtotal?: number;
    taxes?: number;
    total?: number;
    paymentTerms?: string;
    createdAt?: string;
    isActive?: boolean;
    billTo?: Addresses;
    vendor?: Vendors;
    attachments?: Attachments[];
    modifyToken?: string;
    expectedDeliveryDate?: string }
export interface PurchaseOrderItems { quantity?: number;
    commonModel?: string;
    id?: string;
    unitPrice?: number;
    description?: string;
    deliveryDate?: string;
    unitOfMeasure?: string;
    productId?: string;
    discount?: number;
    totalPrice?: number;
    SKU?: string }
export interface Promotions { createdAt?: string;
    code?: string;
    description?: string;
    startDate?: string;
    isActive?: boolean;
    minimumPurchaseAmount?: number;
    currency?: Currency;
    type?: PromotionType;
    endDate?: string;
    updatedAt?: string;
    discountType?: DiscountType;
    isDeleted?: boolean;
    termsAndConditions?: string;
    customerEligibility?: CustomerEligibilityStatus;
    usageLimit?: number;
    commonModel?: string;
    eligibleItems?: string[];
    discountValue?: number;
    limitPerCustomer?: number }
export interface Projects { commonModel?: string;
    name?: string;
    friendlyName?: string;
    id?: string;
    updatedAt?: string;
    modifyToken?: string;
    createdAt?: string }
export interface Products { images?: Images[];
    customFields?: CustomAttributes[];
    isDownloadable?: boolean;
    commonModel?: string;
    relatedProducts?: string[];
    modifyToken?: string;
    brand?: Brands;
    weightUnit?: string;
    createdAt?: string;
    availableForSale?: boolean;
    prices?: Prices[];
    manufacturerName?: string;
    sku?: string;
    dimensions?: Dimensions;
    seoKeywords?: string[];
    metaTitle?: string;
    inventoryQuantity?: number;
    code?: string;
    skuValidation?: SkuValidation;
    type?: string;
    localizations?: Localizations[];
    weight?: number;
    status?: EntityLifecycleStatus;
    title?: string;
    description?: string;
    accountIds?: KeyValues[];
    updatedAt?: string;
    variants?: Variants[];
    options?: ProductOptions[];
    reference?: Entity;
    categories?: string[];
    tags?: string[];
    taxes?: Taxes[];
    id?: string;
    inventoryLocation?: InventoryLocations;
    downloadFiles?: Attachments[];
    vendor?: string;
    publishedAt?: string;
    slug?: string;
    metaDescription?: string }
export interface ProductOptions { createdAt?: string;
    productId?: number;
    updatedAt?: string;
    commonModel?: string;
    values?: string[];
    name?: string;
    id?: string }
export interface Prices { type?: string;
    currency?: Currency;
    commonModel?: string;
    amount?: number }
export interface PriceRules { usageLimit?: number;
    customerSelection?: CustomerSelection;
    prerequisiteVariantIds?: string[];
    targetType?: TargetType;
    entitledQuantity?: number;
    id?: string;
    entitledCountryIds?: string[];
    description?: string;
    modifyToken?: string;
    valueType?: DiscountType;
    value?: number;
    prerequisiteCollectionIds?: string[];
    currency?: string;
    prerequisiteRanges?: PrerequisiteRanges;
    updatedAt?: string;
    entitledCollectionIds?: string[];
    excludedCollectionIds?: string[];
    prerequisiteCustomerIds?: string[];
    entitledProductIds?: string[];
    prerequisiteSavedSearchIds?: string[];
    isDeleted?: boolean;
    prerequisiteProductIds?: string[];
    priority?: number;
    excludedVariantIds?: string[];
    title?: string;
    prerequisiteQuantity?: number;
    startDate?: string;
    isActive?: boolean;
    excludedProductIds?: string[];
    targetSelection?: TargetSelection;
    commonModel?: string;
    oncePerCustomer?: boolean;
    createdAt?: string;
    entitledVariantIds?: string[];
    allocationMethod?: AllocationMethod;
    endDate?: string;
    allocationLimit?: number }
export interface PrerequisiteRanges { greaterThanOrEqualTo?: number;
    type?: PrerequisiteRangeType;
    lessThanOrEqualTo?: number;
    commonModel?: string }
export interface Preferences { language?: string;
    id?: string;
    commonModel?: string;
    currency?: Currency;
    timeZone?: string;
    communications?: CommunicationMethod }
export interface Phones { commonModel?: string;
    countryCode?: string;
    phoneNumber?: string;
    type?: DeviceUsageType;
    country?: string }
export interface Permissions { accessControlType?: AccessControlModel;
    commonModel?: string;
    canEdit?: string[];
    identifierType?: UniversalIdentifierType;
    canDelete?: string[];
    canView?: string[];
    assigneeDetails?: UserOrGroup;
    roles?: string[] }
export interface PerformanceMetrics { costPerClick?: number;
    impressions?: number;
    conversionRate?: number;
    conversions?: number;
    spend?: number;
    commonModel?: string;
    returnOnInvestment?: number;
    costPerConversion?: number;
    clicks?: number }
export interface Payments { customer?: Customers;
    id?: string;
    commonModel?: string;
    updatedAt?: string;
    status?: PaymentStatus;
    notes?: string;
    metadata?: Metadata;
    webhookUrl?: string;
    journalId?: string;
    isDeleted?: boolean;
    shippingDetails?: ShippingDetails;
    paymentCaptureMethod?: string;
    cardDetails?: CardDetails;
    paymentMethod?: PaymentMethods;
    createdAt?: string;
    transactionId?: string;
    modifyToken?: string;
    date?: string;
    isActive?: boolean;
    tip?: number;
    paymentProcessor?: string;
    orderId?: string;
    refund?: Refunds;
    description?: string;
    paymentIntent?: string;
    receiptEmail?: string;
    currency?: Currency;
    billingDetails?: BillingDetails;
    amount?: number;
    invoice?: Invoices }
export interface PaymentTerms { dueDays?: number;
    lastUpdatedDate?: string;
    penaltyRate?: number;
    gracePeriodDays?: number;
    countrySpecificTerms?: string[];
    isDeleted?: boolean;
    description?: string;
    permittedClientClasses?: string[];
    type?: PaymentTerm;
    allowedMethods?: string[];
    createdDate?: string;
    updatedAt?: string;
    notes?: string;
    currency?: string;
    interestRate?: number;
    discountRate?: number;
    languageSupport?: string[];
    minimumPayment?: number;
    commonModel?: string;
    discountDays?: number;
    isActive?: boolean;
    currencyFormatting?: string;
    createdAt?: string;
    id?: string }
export interface PaymentMethods { type?: PaymentMethod;
    id?: string;
    details?: string;
    isDefault?: boolean;
    commonModel?: string }
export interface PaymentDetails { transactionId?: string;
    currency?: Currency;
    paymentGateway?: string;
    isDeleted?: boolean;
    amount?: number;
    commonModel?: string;
    isRefunded?: boolean;
    status?: string;
    method?: string;
    billingAddress?: Addresses;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean }
export interface Participants { userId?: string;
    joinedAt?: string;
    status?: ParticipantEngagementStatus;
    commonModel?: string;
    displayName?: string;
    type?: CommunicationRole }
export interface ParentFolders { id?: string;
    createdAt?: string;
    commonModel?: string;
    name?: string;
    updatedAt?: string }
export interface Orders { orderNumber?: string;
    shippingAddress?: Addresses;
    taxes?: Taxes[];
    shippingId?: string;
    shippingCost?: number;
    customerId?: string;
    storeLocationId?: string;
    id?: string;
    billingAddress?: Addresses;
    note?: string;
    status?: OrderStatus;
    subtotal?: number;
    tax?: number;
    currency?: Currency;
    total?: number;
    createdAt?: string;
    items?: Items[];
    shippingMethod?: string;
    modifyToken?: string;
    tags?: string[];
    updatedAt?: string;
    paymentMethods?: string[];
    tip?: number;
    reference?: Entity;
    commonModel?: string;
    paymentStatus?: PaymentStatus;
    discounts?: Discounts[];
    trackingInfo?: string }
export interface Opportunities { type?: string;
    isWon?: boolean;
    id?: string;
    commonModel?: string;
    stage?: string;
    leadId?: string;
    modifyToken?: string;
    campaign?: Campaigns;
    attachments?: Attachments[];
    tags?: string[];
    entity?: Entity;
    contacts?: Contacts[];
    leadSource?: string;
    description?: string;
    probability?: number;
    notes?: string[];
    companyName?: string;
    nextStep?: string;
    owner?: Users;
    amount?: number;
    title?: string;
    closeDate?: string;
    companyId?: string;
    lostReason?: string;
    customFields?: CustomAttributes[];
    currency?: Currency;
    updatedAt?: string;
    isClosed?: boolean;
    createdAt?: string }
export interface OperatingExpensesDetails { commonModel?: string;
    researchAndDevelopmentExpenses?: number;
    otherOperatingExpenses?: number;
    salesGeneralAndAdministrativeExpenses?: number }
export interface Objects { id?: string;
    commonModel?: string;
    singularNoun?: string;
    slug?: string;
    pluralNoun?: string;
    modifyToken?: string;
    custom?: boolean;
    name?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Notifications { updatedAt?: string;
    message?: string;
    priority?: PriorityLevel;
    createdAt?: string;
    attachments?: Attachments[];
    notificationId?: string;
    customFields?: CustomAttributes[];
    commonModel?: string;
    channel?: string;
    title?: string;
    status?: string;
    type?: string;
    recipient?: Users;
    isActive?: boolean;
    isDeleted?: boolean }
export interface Notes { lastAccessed?: string;
    tags?: string[];
    createdAt?: string;
    title?: string;
    modifyToken?: string;
    sharedWith?: Users[];
    commonModel?: string;
    updatedAt?: string;
    visibility?: ContentVisibility;
    attachments?: Attachments[];
    content?: string;
    url?: string;
    author?: Users;
    id?: string;
    reminder?: string;
    priority?: PriorityLevel;
    color?: string;
    metadata?: string[] }
export interface Modifiers { commonModel?: string;
    createdAt?: string;
    quantity?: number;
    groupId?: string;
    customerNote?: string;
    linePrice?: number;
    id?: string;
    originalPrice?: number;
    updatedAt?: string;
    isDeleted?: boolean;
    isActive?: boolean;
    name?: string;
    modifyToken?: string;
    currency?: Currency }
export interface ModifierGroups { updatedAt?: string;
    modifyToken?: string;
    type?: ModifierType;
    isActive?: boolean;
    isDeleted?: boolean;
    description?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    commonModel?: string;
    modifiers?: Modifiers[] }
export interface Metadata { id?: string;
    createdAt?: string;
    updatedAt?: string;
    valueParsingRequired?: boolean;
    type?: DataType;
    commonModel?: string;
    entityId?: string;
    value?: string;
    key?: string;
    entityType?: string }
export interface Messages { recipientEmails?: string[];
    medium?: string;
    isActive?: boolean;
    reactions?: Reactions[];
    templateId?: string;
    receiverId?: string;
    readStatus?: MessageReadStatus;
    cc?: string;
    commonModel?: string;
    chatId?: string;
    reference?: Entity;
    id?: string;
    threadId?: string;
    replyToMessageId?: string;
    senderId?: string;
    historyId?: string;
    trackingSettings?: KeyValues[];
    metadata?: Metadata[];
    priority?: PriorityLevel;
    bcc?: string;
    timestamp?: string;
    content?: string;
    type?: MessageContentType;
    messageType?: string;
    attachments?: Attachments[];
    senderEmail?: string;
    isDeleted?: boolean;
    subject?: string;
    deliveryStatus?: MessageDeliveryStatus;
    createdAt?: string;
    updatedAt?: string;
    modifyToken?: string;
    receiverRoles?: ReceiverRoles[];
    tags?: KeyValues[] }
export interface Locations { description?: string;
    website?: string;
    id?: string;
    isActive?: boolean;
    domain?: string;
    socialProfiles?: SocialProfiles[];
    businessName?: string;
    name?: string;
    countryCode?: string;
    type?: string;
    commonModel?: string;
    address?: Addresses;
    phones?: Phones[];
    emails?: Emails[];
    businessHours?: BusinessHours[];
    numberOfEmployees?: number;
    currency?: Currency;
    tags?: string[];
    merchantId?: string;
    updatedAt?: string;
    modifyToken?: string;
    defaultPhoneNumber?: string;
    locationNumber?: string;
    timezone?: string;
    defaultEmail?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    merchantCategoryCode?: string }
export interface Localizations { metaTitle?: string;
    locale?: string;
    title?: string;
    metaDescription?: string;
    commonModel?: string;
    description?: string }
export interface Leads { customFields?: CustomAttributes[];
    entity?: Entity;
    opportunities?: Opportunities[];
    jobTitle?: string;
    name?: string;
    leadStatus?: LeadLifecycleStatus;
    modifyToken?: string;
    emails?: Emails[];
    createdAt?: string;
    id?: string;
    commonModel?: string;
    phones?: Phones[];
    companyId?: string;
    companyName?: string;
    numberOfEmployees?: number;
    middleName?: string;
    defaultPhoneNumber?: string;
    updatedAt?: string;
    website?: string;
    preferredContactMethod?: CommunicationMethod;
    industry?: string;
    annualRevenue?: number;
    socialProfiles?: SocialProfiles[];
    firstName?: string;
    lastName?: string;
    notes?: Notes[];
    defaultEmail?: string;
    addresses?: Addresses[];
    leadSource?: LeadSource }
export interface LeadSource { sourceId?: string;
    details?: string;
    sourceName?: string;
    commonModel?: string }
export interface KeyValues { commonModel?: string;
    key?: string;
    value?: string }
export interface JsonSchema { description?: string;
    strict?: boolean;
    name?: string;
    commonModel?: string;
    schema?: unknown;
    type?: JsonSchemaType }
export interface JournalEntryLines { accountId?: string;
    id?: string;
    commonModel?: string;
    description?: string;
    quantity?: number;
    tracking?: FinancialTrackingCategories;
    taxCode?: string;
    debit?: number;
    credit?: number;
    amount?: number;
    taxAmount?: number }
export interface JournalEntries { createdBy?: string;
    isActive?: boolean;
    currency?: Currency;
    description?: string;
    status?: JournalEntryStatus;
    lines?: JournalEntryLines[];
    updatedBy?: string;
    isReconciled?: boolean;
    isDeleted?: boolean;
    exchangeRate?: number;
    updatedAt?: string;
    id?: string;
    name?: string;
    commonModel?: string;
    type?: string;
    entryNumber?: string;
    createdAt?: string;
    totalAmount?: number;
    modifyToken?: string;
    date?: string;
    memo?: string;
    reference?: string;
    attachments?: Attachments[] }
export interface Jobs { educationRequirements?: string;
    modifyToken?: string;
    title?: string;
    experienceRequirements?: string;
    incentiveCompensation?: string;
    jobLocationType?: string;
    jobTrialPeriod?: string;
    baseSalary?: Salaries;
    location?: Addresses;
    qualifications?: string;
    workHours?: string;
    salaryCurrency?: string;
    jobImmediateStart?: boolean;
    employmentType?: EmploymentType;
    validUntil?: string;
    jobShifts?: string[];
    jobTrainingProvided?: boolean;
    incentives?: string;
    applicationDeadline?: string;
    jobStartDate?: string;
    jobBenefits?: string;
    remote?: boolean;
    updatedAt?: string;
    company?: Companies;
    employmentUnit?: EmploymentUnits;
    id?: string;
    description?: string;
    occupationalCategory?: string;
    jobFlexibleHours?: boolean;
    skills?: string[];
    benefits?: string[];
    languagesSpoken?: string[];
    createdAt?: string;
    workFromHome?: boolean;
    industry?: string;
    commonModel?: string;
    responsibilities?: string }
export interface Items { parentId?: string;
    weight?: number;
    createdAt?: string;
    sku?: string;
    title?: string;
    description?: string;
    requiresShipping?: boolean;
    productId?: string;
    isDeleted?: boolean;
    isTaxable?: boolean;
    fulfillableQuantity?: number;
    commonModel?: string;
    accountName?: string;
    variantId?: string;
    modifiers?: Modifiers[];
    accountId?: string;
    linePrice?: number;
    shippingId?: string;
    updatedAt?: string;
    discountedPrice?: number;
    tax?: number;
    id?: string;
    originalPrice?: number;
    quantity?: number;
    discount?: number;
    discountLines?: Discounts[];
    isActive?: boolean;
    taxLines?: TaxLines[];
    price?: number;
    currency?: Currency;
    image?: Images;
    variantTitle?: string;
    weightUnit?: string }
export interface Invoices { terms?: string;
    commonModel?: string;
    createdAt?: string;
    header?: string;
    discountTotal?: number;
    transactionDate?: string;
    notes?: string;
    adjustments?: InvoiceAdjustments[];
    billingAddress?: Addresses;
    reference?: Entity;
    paymentTerms?: PaymentTerms;
    isDeleted?: boolean;
    subtotal?: number;
    discountPercentage?: number;
    invoicePayments?: InvoicePayments[];
    modifyToken?: string;
    dueDate?: string;
    attachments?: Attachments[];
    vatName?: string;
    taxTotal?: number;
    metadata?: Metadata[];
    invoiceNumber?: string;
    items?: InvoiceItems[];
    exchangeRate?: number;
    balanceDue?: number;
    issuedDate?: string;
    shippingAddress?: Addresses;
    customer?: Customers;
    updatedAt?: string;
    isActive?: boolean;
    vatNumber?: string;
    status?: PaymentStatus;
    currency?: Currency;
    id?: string;
    total?: number;
    paidAmount?: number;
    footer?: string }
export interface InvoicePayments { id?: string;
    date?: string;
    commonModel?: string;
    amount?: number;
    createdAt?: string;
    updatedAt?: string;
    modifyToken?: string }
export interface InvoiceItems { availabilityDate?: string;
    quantity?: number;
    description?: string;
    onSale?: boolean;
    inventoryQuantity?: number;
    variants?: Variants[];
    rating?: number;
    ratingCount?: number;
    isAvailable?: boolean;
    discount?: number;
    options?: ProductOptions[];
    inventoryStatus?: ProductAvailabilityStatus;
    customFields?: CustomAttributes[];
    upc?: string;
    deletedAt?: string;
    ean?: string;
    tags?: string[];
    isbn?: string;
    name?: string;
    mpn?: string;
    condition?: ItemCondition;
    createdAt?: string;
    currency?: Currency;
    isActive?: boolean;
    weight?: number;
    modifyToken?: string;
    commonModel?: string;
    gallery?: Images[];
    reviews?: RatingsReviews[];
    price?: number;
    brand?: string;
    id?: string;
    sku?: string;
    imageUrl?: string;
    updatedAt?: string;
    dimensions?: Dimensions }
export interface InvoiceAdjustments { isDeleted?: boolean;
    updatedAt?: string;
    type?: InvoiceAdjustmentType;
    commonModel?: string;
    amount?: number;
    appliedToInvoiceItemId?: string;
    isActive?: boolean;
    id?: string;
    description?: string;
    createdAt?: string;
    currency?: Currency;
    metadata?: Metadata }
export interface InventoryLocations { contactInformation?: Contacts[];
    type?: InventoryStorageType;
    createdAt?: string;
    quantity?: number;
    commonModel?: string;
    name?: string;
    operationalHours?: string;
    address?: Addresses;
    isActive?: boolean;
    updatedAt?: string;
    isDeleted?: boolean;
    locationId?: string }
export interface IncomeTaxExpenseDetails { currentIncomeTax?: number;
    taxAllowanceCredit?: number;
    commonModel?: string;
    deferredIncomeTax?: number }
export interface IncomeStatements { modifyToken?: string;
    exchangeRate?: number;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    incomeBeforeTax?: number;
    id?: string;
    accountSummary?: KeyValues[];
    depreciationAndAmortization?: number;
    costOfGoodsSold?: number;
    operatingExpenses?: OperatingExpensesDetails;
    grossProfit?: number;
    shareholderEquity?: ShareholderEquityDetails;
    period?: string;
    commonModel?: string;
    revenue?: RevenueDetails;
    operatingIncome?: number;
    interestExpense?: number;
    ebitda?: number;
    createdAt?: string;
    currency?: Currency;
    updatedAt?: string;
    profitMargins?: number;
    netIncome?: number }
export interface Images { createdAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    tags?: string[];
    id?: string;
    type?: ImageType;
    caption?: string;
    mimeType?: ImageMimeType;
    altText?: string;
    title?: string;
    updatedAt?: string;
    width?: number;
    commonModel?: string;
    thumbnailSrc?: string;
    data?: string;
    src?: string;
    height?: number }
export interface HiringOrganizations { locations?: Addresses[];
    description?: string;
    size?: string;
    commonModel?: string;
    name?: string;
    industry?: string }
export interface GiftCards { createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    currency?: Currency;
    commonModel?: string;
    purchasedBy?: string;
    id?: string;
    isDeleted?: boolean;
    status?: LifecycleStatus;
    balance?: number;
    expirationDate?: string;
    cardNumber?: string;
    amountUsed?: number;
    issuedBy?: string;
    associatedUser?: Users;
    metadata?: string }
export interface GeoCoordinates { accuracy?: number;
    timestamp?: string;
    commonModel?: string;
    latitude?: number;
    longitude?: number;
    altitudeAccuracy?: number;
    speed?: number;
    altitude?: number;
    heading?: number }
export interface Fulfillments { receipt?: FulfillmentReceipts;
    notes?: string;
    totalPrice?: number;
    metadata?: Metadata;
    shipmentDate?: string;
    expectedDelivery?: string;
    address?: Addresses;
    items?: Items[];
    trackingUrls?: string[];
    commonModel?: string;
    createdAt?: string;
    currency?: Currency;
    status?: FulfillmentStatus;
    orderId?: string;
    carrier?: string;
    updatedAt?: string;
    fulfillmentItems?: FulfillmentItems[];
    service?: string;
    id?: string;
    trackingNumber?: string }
export interface FulfillmentReceipts { amount?: number;
    currency?: Currency;
    transactionDetails?: TransactionDetails;
    isActive?: boolean;
    isDeleted?: boolean;
    fulfillmentId?: string;
    customer?: Customers;
    commonModel?: string;
    id?: string;
    testCase?: boolean;
    updatedAt?: string;
    status?: OrderStatus;
    paymentMethod?: PaymentMethod;
    createdAt?: string;
    authorization?: string }
export interface FulfillmentItems { description?: string;
    quantity?: number;
    taxable?: boolean;
    customAttributes?: CustomAttributes;
    weight?: number;
    updatedAt?: string;
    isActive?: boolean;
    productId?: string;
    price?: number;
    requiresShipping?: boolean;
    imageUrl?: string;
    status?: OrderStatus;
    title?: string;
    id?: string;
    variantTitle?: string;
    fulfillmentId?: string;
    dimensions?: Dimensions;
    createdAt?: string;
    commonModel?: string;
    weightUnit?: string;
    variantId?: string;
    orderId?: string;
    isDeleted?: boolean;
    sku?: string }
export interface Folders { size?: number;
    description?: string;
    id?: string;
    owner?: FileOwners;
    createdAt?: string;
    modifyToken?: string;
    isDownloadable?: boolean;
    permissions?: Permissions;
    name?: string;
    path?: string;
    updatedAt?: string;
    commonModel?: string;
    parent?: ParentFolders }
export interface Files { commonModel?: string;
    exportFormats?: string;
    mimeType?: string;
    isExportable?: boolean;
    id?: string;
    content?: string;
    size?: number;
    modifyToken?: string;
    description?: string;
    type?: FileType;
    name?: string;
    extension?: string;
    isDownloadable?: boolean;
    permissions?: Permissions;
    updatedAt?: string;
    downloadUrl?: string;
    owner?: FileOwners;
    createdAt?: string;
    path?: string;
    parent?: ParentFolders }
export interface FileOwners { name?: string;
    email?: string;
    updatedAt?: string;
    createdAt?: string;
    commonModel?: string;
    id?: string }
export interface Expenses { status?: ExpenseApprovalStatus;
    tax?: Taxes[];
    customFields?: CustomAttributes[];
    createdByUserId?: string;
    isActive?: boolean;
    tags?: string[];
    createdAt?: string;
    receiptUrls?: string[];
    note?: string;
    accountId?: string;
    isDeleted?: boolean;
    location?: Addresses;
    attachments?: Attachments[];
    reportId?: string;
    modifyToken?: string;
    currency?: string;
    dateIncurred?: string;
    approvedByUserId?: string;
    updatedAt?: string;
    id?: string;
    paymentMethod?: PaymentMethods;
    commonModel?: string;
    description?: string;
    items?: Items[];
    transactionId?: string;
    merchant?: string;
    amount?: number;
    category?: ExpenseCategories }
export interface ExpenseCategories { id?: string;
    name?: string;
    commonModel?: string;
    description?: string }
export interface Evidence { refundPolicy?: string;
    uncategorizedText?: string;
    cancellationPolicy?: string;
    receipt?: string;
    shippingDate?: string;
    serviceDocumentation?: string;
    cancellationPolicyDisclosure?: string;
    customerEmailAddress?: string;
    uncategorizedFile?: string;
    customerName?: string;
    shippingTrackingNumber?: string;
    serviceDate?: string;
    customerPurchaseIp?: string;
    refundRefusalExplanation?: string;
    accessActivityLog?: string;
    customerSignature?: string;
    productDescription?: string;
    cancellationRebuttal?: string;
    refundPolicyDisclosure?: string;
    shippingAddress?: string;
    shippingDocumentation?: string;
    duplicateChargeDocumentation?: string;
    billingAddress?: string;
    duplicateChargeExplanation?: string;
    duplicateChargeId?: string;
    shippingCarrier?: string;
    customerCommunication?: string;
    commonModel?: string }
export interface Events { attendees?: Users[];
    entryPoints?: EntryPoints[];
    attachments?: Attachments[];
    createdAt?: string;
    commonModel?: string;
    location?: string;
    startDate?: string;
    visibility?: EventVisibility;
    rules?: EventRules;
    endDate?: string;
    organizer?: Users;
    reminders?: EventReminders[];
    recurrence?: EventRecurrences;
    updatedAt?: string;
    id?: string;
    modifyToken?: string;
    isDeleted?: boolean;
    timeZone?: string;
    title?: string;
    description?: string;
    link?: string;
    status?: EventStatus }
export interface EventRules { isMultiDay?: boolean;
    canAddSelf?: boolean;
    guestsCanModify?: boolean;
    commonModel?: string;
    isAllDay?: boolean;
    locked?: boolean;
    guestsCanInvite?: boolean }
export interface EventReminders { minutes?: number;
    action?: EventReminderAction;
    commonModel?: string }
export interface EventRecurrences { commonModel?: string;
    id?: string;
    rules?: EventRecurrenceRules[] }
export interface EventRecurrenceRules { count?: number;
    frequency?: EventFrequency;
    type?: EventRuleType;
    interval?: number;
    until?: string;
    byMonthDay?: number;
    dates?: string[];
    id?: string;
    byDay?: string;
    commonModel?: string;
    byMonth?: number }
export interface EntryPoints { pin?: string;
    commonModel?: string;
    uri?: string;
    id?: string;
    type?: string;
    name?: string }
export interface Entity { commonModel?: string;
    attributes?: string[];
    entityType?: EntityCategory;
    entityId?: string;
    value?: string }
export interface EmploymentUnits { commonModel?: string;
    name?: string;
    description?: string }
export interface Emails { type?: EmailCategoryType;
    email?: string;
    commonModel?: string }
export interface Educations { gpa?: number;
    institution?: string;
    commonModel?: string;
    startDate?: string;
    endDate?: string;
    fieldOfStudy?: string;
    degree?: string }
export interface Drives { updatedAt?: string;
    description?: string;
    name?: string;
    commonModel?: string;
    createdAt?: string;
    id?: string }
export interface Drafts { metadata?: Metadata[];
    commonModel?: string;
    updatedAt?: string;
    modifyToken?: string;
    subject?: string;
    attachments?: Attachments[];
    type?: MessageContentType;
    messageId?: string;
    replyToMessageId?: string;
    threadId?: string;
    trackingSettings?: KeyValues[];
    id?: string;
    bcc?: string;
    timestamp?: string;
    chatId?: string;
    senderEmail?: string;
    templateId?: string;
    tags?: KeyValues[];
    createdAt?: string;
    receiverId?: string;
    senderId?: string;
    priority?: PriorityLevel;
    content?: string;
    reference?: Entity;
    recipientEmails?: string[];
    cc?: string }
export interface Disputes { currency?: Currency;
    status?: FinancialDisputeStatus;
    charge?: string;
    notes?: string;
    isDeleted?: boolean;
    reason?: string;
    amount?: number;
    version?: string;
    chargeRefundable?: boolean;
    evidence?: Evidence;
    transactionId?: string;
    metadata?: Metadata;
    isActive?: boolean;
    updated?: string;
    commonModel?: string;
    id?: string;
    created?: string;
    customerId?: string }
export interface Discounts { timesUsed?: number;
    title?: string;
    updatedAt?: string;
    usageLimitExpirations?: UsageLimitExpirations;
    currency?: string;
    commonModel?: string;
    status?: Status;
    minimumQuantityOfItems?: number;
    id?: string;
    modifyToken?: string;
    createdAt?: string;
    stackable?: boolean;
    type?: DiscountType;
    startDate?: string;
    minimumPurchaseAmount?: number;
    channelAvailability?: ChannelAvailability;
    customFields?: CustomAttributes[];
    minimumRequirements?: MinimumRequirements;
    exclusions?: string[];
    isDeleted?: boolean;
    appliesTo?: AppliesTo;
    code?: string;
    value?: number;
    endDate?: string;
    isActive?: boolean;
    customerEligibility?: CustomerEligibility;
    usageLimit?: number;
    description?: string;
    usageLimitPerCustomer?: number }
export interface Dimensions { commonModel?: string;
    length?: number;
    height?: number;
    width?: number }
export interface Databases { tables?: Tables[];
    type?: DatabaseType;
    name?: string;
    organizationId?: string;
    url?: string;
    title?: string;
    tablesExpiresIn?: string;
    region?: string;
    createdAt?: string;
    id?: string;
    isDeleted?: boolean;
    description?: string;
    modifyToken?: string;
    permissionLevel?: string;
    commonModel?: string;
    projectId?: string;
    isActive?: boolean;
    updatedAt?: string }
export interface Customers { companyId?: string;
    id?: string;
    middleName?: string;
    customerType?: CustomerType;
    emails?: Emails[];
    socialProfiles?: SocialProfiles[];
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    dateOfBirth?: string;
    customerNumber?: string;
    currency?: Currency;
    loyaltyProgramMembership?: string;
    tags?: string[];
    addresses?: Addresses[];
    source?: string;
    customFields?: CustomAttributes[];
    reference?: Entity;
    notes?: string;
    defaultAddress?: Addresses;
    jobTitle?: string;
    metadata?: string;
    status?: CustomerStatus;
    lastName?: string;
    preferredContactMethod?: CommunicationMethod;
    phones?: Phones[];
    fullName?: string;
    companyName?: string;
    phoneNumber?: string;
    modifyToken?: string;
    firstName?: string;
    title?: string;
    customerSegment?: string }
export interface CustomAttributes { fieldType?: DataType;
    commonModel?: string;
    id?: string;
    fieldValue?: string;
    fieldName?: string }
export interface CurrencyDetails { commonModel?: string;
    currency?: Currency;
    value?: number;
    id?: string }
export interface CreditNotes { createdAt?: string;
    memo?: string;
    creditType?: CreditType;
    reason?: string;
    attachments?: Attachments[];
    adjustment?: number;
    issuedDate?: string;
    companyId?: string;
    shippingAddress?: Addresses;
    updatedAt?: string;
    isDeleted?: boolean;
    discounts?: number[];
    lines?: CreditNoteLines[];
    modifyToken?: string;
    number?: string;
    metadata?: Metadata;
    vatNumber?: string;
    amount?: number;
    companyName?: string;
    commonModel?: string;
    description?: string;
    vatName?: string;
    billingAddress?: Addresses;
    dueDate?: string;
    taxAmount?: number;
    taxRate?: number;
    payments?: Payments[];
    id?: string;
    currency?: Currency;
    status?: CreditNoteStatus;
    customer?: Customers;
    isActive?: boolean }
export interface CreditNoteLines { taxRate?: number;
    description?: string;
    quantity?: number;
    total?: number;
    unitPrice?: number;
    product?: Products;
    commonModel?: string;
    customFields?: CustomAttributes[];
    id?: string;
    account?: string }
export interface Conversations { modifyToken?: string;
    updatedAt?: string;
    unreadCount?: number;
    customFields?: CustomAttributes[];
    messages?: Messages[];
    type?: ChatType;
    metadata?: string;
    title?: string;
    status?: ConversationStatus;
    commonModel?: string;
    isRead?: boolean;
    createdAt?: string;
    participants?: Participants[];
    id?: string;
    lastReadMessageId?: string;
    comments?: Comments[];
    isPinned?: boolean;
    lastMessage?: Messages }
export interface Contacts { defaultPhoneNumber?: string;
    modifyToken?: string;
    defaultEmail?: string;
    dateOfBirth?: string;
    phones?: Phones[];
    websites?: string[];
    id?: string;
    code?: string;
    tags?: string[];
    lastName?: string;
    commonModel?: string;
    companyName?: string;
    address?: Addresses;
    emails?: Emails[];
    notes?: Notes;
    firstName?: string;
    companyId?: string;
    addresses?: Addresses[];
    userRoles?: UserRoles[];
    relationship?: string;
    leadId?: string;
    socialProfiles?: SocialProfiles[];
    isActive?: boolean;
    note?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    updatedAt?: string }
export interface Companies { reference?: Entity;
    revenue?: number;
    modifyToken?: string;
    industry?: string;
    description?: string;
    additionalContacts?: Contacts[];
    foundedDate?: string;
    stockSymbol?: string;
    emails?: Emails[];
    revenueCurrency?: string;
    dunsNumber?: string;
    numberOfEmployeesRange?: string;
    createdAt?: string;
    incorporationDate?: string;
    defaultEmail?: string;
    tags?: string[];
    logo?: string;
    address?: Addresses;
    revenueRange?: string;
    incorporationCountry?: string;
    website?: string;
    regulatoryStatus?: string;
    defaultPhoneNumber?: string;
    name?: string;
    socialProfiles?: SocialProfiles[];
    numberOfEmployees?: number;
    customFields?: CustomAttributes[];
    companyNumber?: string;
    parentCompanyId?: string;
    commonModel?: string;
    type?: string;
    taxId?: string;
    legalName?: string;
    id?: string;
    phones?: Phones[];
    domain?: string;
    updatedAt?: string }
export interface Comments { isActive?: boolean;
    text?: string;
    isDeleted?: boolean;
    parentId?: string;
    createdAt?: string;
    likes?: number;
    commentId?: string;
    commonModel?: string;
    isFlagged?: boolean;
    attachments?: Attachments[];
    author?: Users;
    updatedAt?: string;
    metadata?: Metadata[] }
export interface Chats { topP?: number;
    temperature?: number;
    systemMessage?: string;
    maxTokens?: number;
    numberOfCompletions?: number;
    presencePenalty?: number;
    enableParallelToolCalls?: boolean;
    model?: string;
    frequencyPenalty?: number;
    userId?: string;
    topK?: number;
    seed?: number;
    responseFormat?: ResponseFormat;
    logitBias?: unknown;
    modifyToken?: string;
    tools?: JsonSchema[];
    toolChoice?: AiToolChoice;
    stopSequences?: string[];
    objectType?: string;
    createdAt?: string;
    id?: string;
    systemFingerprint?: string;
    commonModel?: string;
    usage?: AiUsage;
    messages?: AiMessages[] }
export interface Categories { image?: string;
    parentId?: string;
    updatedAt?: string;
    createdAt?: string;
    tags?: string[];
    modifyToken?: string;
    commonModel?: string;
    id?: string;
    name?: string }
export interface Carts { paymentDetails?: PaymentDetails;
    giftCards?: GiftCards[];
    totalWeight?: number;
    note?: string;
    items?: Items[];
    currency?: Currency;
    totalPrice?: number;
    state?: OrderStatus;
    createdAt?: string;
    discountCodes?: string[];
    updatedAt?: string;
    shippingDetails?: ShippingDetails;
    attributes?: string[];
    buyerIdentity?: Customers;
    commonModel?: string;
    promotions?: Promotions[];
    id?: string;
    messages?: string[];
    version?: string;
    token?: string;
    originalTotalPrice?: number;
    itemCount?: number }
export interface CardDetails { status?: string;
    bin?: string;
    expiryMonth?: string;
    isDeleted?: boolean;
    brand?: string;
    expiryYear?: string;
    lastFour?: string;
    avcStatus?: AvcStatus;
    id?: string;
    authorizedAt?: string;
    capturedAt?: string;
    createdAt?: string;
    prepaidType?: PrepaidType;
    entryMethod?: EntryMethod;
    statementDescription?: string;
    commonModel?: string;
    type?: CardType;
    modifyToken?: string;
    updatedAt?: string;
    fingerprint?: string;
    isActive?: boolean;
    cvvStatus?: CvvStatus }
export interface Candidates { notes?: Notes[];
    updatedAt?: string;
    certifications?: string[];
    websites?: string[];
    firstName?: string;
    id?: string;
    jobId?: string;
    languages?: string[];
    role?: string;
    createdAt?: string;
    modifyToken?: string;
    skills?: string[];
    commonModel?: string;
    lastName?: string;
    coverLetter?: Attachments;
    profilePicture?: Images;
    educations?: Educations[];
    references?: References[];
    availability?: string;
    email?: string;
    resume?: Attachments;
    socialProfiles?: SocialProfiles[];
    preferredWorkLocation?: string;
    status?: EmploymentAndCandidateStatus;
    workExperiences?: WorkExperiences[];
    customFields?: CustomAttributes[];
    phoneNumber?: string }
export interface Campaigns { status?: CampaignStatus;
    budget?: number;
    targetAudience?: string;
    updatedAt?: string;
    createdAt?: string;
    creativeAssets?: Attachments;
    isActive?: boolean;
    name?: string;
    commonModel?: string;
    performanceMetrics?: PerformanceMetrics;
    startDate?: string;
    endDate?: string;
    type?: CampaignType;
    channels?: string[];
    tags?: string[];
    isDeleted?: boolean;
    id?: string }
export interface Calendars { isDeleted?: boolean;
    timeZone?: string;
    modifyToken?: string;
    title?: string;
    createdAt?: string;
    description?: string;
    id?: string;
    updatedAt?: string;
    type?: string;
    commonModel?: string;
    location?: string }
export interface CRMAccounts { shippingAddress?: Addresses;
    accountType?: StakeholderType;
    commonModel?: string;
    customFields?: CustomAttributes[];
    id?: string;
    rating?: AccountEngagementLevel;
    email?: string;
    industry?: string;
    billingAddress?: Addresses;
    createdAt?: string;
    tags?: string[];
    updatedAt?: string;
    status?: AccountStatus;
    website?: string;
    ownerId?: string;
    annualRevenue?: number;
    name?: string;
    phone?: string;
    numberOfEmployees?: number }
export interface BusinessHours { storeID?: string;
    sessions?: TimeSession[];
    timeZone?: string;
    closed?: boolean;
    createdAt?: string;
    id?: string;
    isDeleted?: boolean;
    updatedAt?: string;
    commonModel?: string;
    dayOfWeek?: DayOfWeek;
    isActive?: boolean }
export interface Brands { updatedAt?: string;
    logo?: string;
    commonModel?: string;
    id?: string;
    established?: string;
    createdAt?: string;
    country?: string;
    description?: string;
    name?: string;
    status?: ItemEntityStatus;
    customFields?: CustomAttributes[];
    website?: string }
export interface Bills { vendor?: Vendors;
    notes?: string;
    status?: BillingStatus;
    attachments?: Attachments[];
    customer?: Customers;
    invoiceNumber?: string;
    commonModel?: string;
    issueDate?: string;
    dueDate?: string;
    currency?: string;
    items?: Items[];
    createdAt?: string;
    customFields?: CustomAttributes[];
    amountDue?: number;
    updatedAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    modifyToken?: string;
    id?: string;
    amountRemaining?: number;
    amountPaid?: number;
    terms?: string }
export interface BillingDetails { commonModel?: string;
    companyName?: string;
    currency?: Currency;
    additionalAttributes?: CustomAttributes[];
    vatId?: string;
    language?: string;
    createdAt?: string;
    customerId?: string;
    updatedAt?: string;
    phoneNumber?: string;
    note?: string;
    paymentTerms?: PaymentTerm;
    isActive?: boolean;
    fullName?: string;
    defaultPaymentMethod?: PaymentMethods;
    isDeleted?: boolean;
    address?: Addresses;
    id?: string;
    email?: string }
export interface BalanceSheets { accountSummary?: KeyValues[];
    isDeleted?: boolean;
    customFields?: CustomAttributes[];
    stockholdersEquity?: number;
    inventory?: number;
    prepaidExpenses?: number;
    deferredRevenue?: number;
    additionalPaidInCapital?: number;
    treasuryStock?: number;
    currentLiabilities?: number;
    nonCurrentLiabilities?: number;
    isActive?: boolean;
    balanceDate?: string;
    modifyToken?: string;
    shortTermDebt?: number;
    accountsPayable?: number;
    intangibleAssets?: number;
    otherCurrentLiabilities?: number;
    totalLiabilities?: number;
    accruedLiabilities?: number;
    longTermDebt?: number;
    totalAssets?: number;
    otherCurrentAssets?: number;
    nonCurrentAssets?: number;
    currentAssets?: number;
    cashAndCashEquivalents?: number;
    auditInfo?: AuditInformation;
    retainedEarnings?: number;
    taxLiabilities?: number;
    notesPayable?: number;
    commonModel?: string;
    otherNonCurrentLiabilities?: number;
    otherNonCurrentAssets?: number;
    id?: string;
    preferredStock?: number;
    accumulatedDepreciation?: number;
    equity?: number;
    currentPortionOfLongTermDebt?: number;
    commonStock?: number;
    accountsReceivable?: number;
    currency?: Currency;
    shortTermInvestments?: number;
    minorityInterest?: number;
    totalLiabilitiesAndEquity?: number;
    notes?: string;
    createdAt?: string;
    fixedAssets?: number;
    propertyPlantEquipment?: number;
    updatedAt?: string }
export interface AuditInformation { notes?: string;
    auditOpinion?: AuditOpinionType;
    auditDate?: string;
    auditorName?: string;
    commonModel?: string }
export interface Attributes { isNullable?: boolean;
    customTypeDetails?: Metadata[];
    isUnique?: boolean;
    id?: string;
    slug?: string;
    description?: string;
    commonModel?: string;
    name?: string;
    isRepeated?: boolean;
    modifyToken?: string;
    updatedAt?: string;
    dataType?: DataType;
    isRequired?: boolean;
    createdAt?: string }
export interface Attachments { fileType?: string;
    content?: string;
    metadata?: Metadata;
    thumbnailUrl?: string;
    fileName?: string;
    updatedAt?: string;
    fileSize?: number;
    associatedWith?: Entity;
    id?: string;
    permissions?: Permissions;
    createdAt?: string;
    commonModel?: string;
    url?: string;
    previewUrl?: string }
export interface AiUsage { completionTokens?: number;
    commonModel?: string;
    totalTokens?: number;
    promptTokens?: number }
export interface AiToolChoice { commonModel?: string;
    name?: string;
    type?: AiToolChoiceType }
export interface AiMessagesContent { toolResultContent?: ToolResultContent[];
    id?: string;
    isError?: boolean;
    type?: AiMessagesContentType;
    modifyToken?: string;
    text?: string;
    name?: string;
    commonModel?: string;
    image?: Images;
    toolUseId?: string }
export interface AiMessages { toolCalls?: ToolCalls[];
    commonModel?: string;
    index?: number;
    finishReason?: string;
    refusal?: string;
    role?: AiRole;
    name?: string;
    content?: AiMessagesContent[] }
export interface Addresses { city?: string;
    type?: ContactAddressType;
    subdivisionCode?: string;
    addressLine2?: string;
    firstName?: string;
    contactId?: string;
    countryCode?: string;
    postalCodeExtension?: string;
    province?: string;
    street?: string;
    customFields?: CustomAttributes[];
    lastName?: string;
    companyName?: string;
    name?: string;
    middleName?: string;
    region?: string;
    id?: string;
    commonModel?: string;
    geoLocation?: GeoCoordinates;
    email?: string;
    phoneNumber?: string;
    accountId?: string;
    country?: string;
    postalCode?: string }
export interface AdditionalCharges { commonModel?: string;
    description?: string;
    amount?: number;
    type?: FinancialChargeType;
    id?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Accounts { branch?: string;
    overdraftProtection?: boolean;
    taxType?: string;
    name?: string;
    status?: FinancialAccountStatus;
    notes?: string;
    id?: string;
    modifyToken?: string;
    commonModel?: string;
    overdraftLimit?: number;
    accountCode?: string;
    updatedAt?: string;
    title?: string;
    accountType?: AccountType;
    allowPayments?: boolean;
    isDeleted?: boolean;
    description?: string;
    currency?: Currency;
    closedAt?: string;
    isActive?: boolean;
    createdAt?: string;
    showInExpenses?: boolean;
    balance?: number;
    accountNumber?: string;
    transactions?: Transactions[];
    interestRate?: number;
    owner?: Customers }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum AccountType { OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetBuildings = 'asset::buildings', AssetOtherCurrentAsset = 'asset::other-current-asset', LiabilityLongTermLiability = 'liability::long-term-liability', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetLandAsset = 'asset::land-asset', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', Liability = 'liability', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetLand = 'asset::land', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherExpenseDepletion = 'other-expense::depletion', RevenueSalesRetail = 'revenue::sales-retail', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityCommonStock = 'equity::common-stock', OtherCurrentLiability = 'other-current-liability', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpensePenaltiesSettlements = 'expense::penalties-settlements', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseBadDebts = 'expense::bad-debts', AssetLoansToOthers = 'asset::loans-to-others', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityPartnerContributions = 'equity::partner-contributions', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetChecking = 'asset::checking', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetDevelopmentCosts = 'asset::development-costs', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', EquityPartnersEquity = 'equity::partners-equity', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseStaffCosts = 'expense::staff-costs', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetSavings = 'asset::savings', OtherExpenseVehicle = 'other-expense::vehicle', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherExpenseUtilities = 'other-expense::utilities', AssetOtherConsumables = 'asset::other-consumables', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', CostOfGoodsSold = 'cost-of-goods-sold', EquityCapitalReserves = 'equity::capital-reserves', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseBankCharges = 'expense::bank-charges', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityOwnersEquity = 'equity::owners-equity', Equity = 'equity', ExpenseManagementCompensation = 'expense::management-compensation', LiabilityCreditCard = 'liability::credit-card', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityNotesPayable = 'liability::notes-payable', Asset = 'asset', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', ExpenseInterestPaid = 'expense::interest-paid', EquityShareCapital = 'equity::share-capital', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseAmortizationExpense = 'expense::amortization-expense', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseCharitableContributions = 'expense::charitable-contributions', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetFixedAssetSoftware = 'asset::fixed-asset-software', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetOtherCurrentAssets = 'asset::other-current-assets', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetCashOnHand = 'asset::cash-on-hand', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', EquityRetainedEarnings = 'equity::retained-earnings', AssetLoansToOfficers = 'asset::loans-to-officers', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', EquityTreasuryStock = 'equity::treasury-stock', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', Expense = 'expense', AssetUndepositedFunds = 'asset::undeposited-funds', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetRetainage = 'asset::retainage', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetOtherFixedAssets = 'asset::other-fixed-assets', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', LiabilityLongTermDebit = 'liability::long-term-debit', AssetLicenses = 'asset::licenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetBank = 'asset::bank', EquityPersonalIncome = 'equity::personal-income', ExpenseExternalServices = 'expense::external-services', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetInventory = 'asset::inventory', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncome = 'other-income', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetGoodwill = 'asset::goodwill', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetFixedAssetPhone = 'asset::fixed-asset-phone', RevenueOperatingGrants = 'revenue::operating-grants', EquityInvestmentGrants = 'equity::investment-grants', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetVehicles = 'asset::vehicles', ExpenseRepairMaintenance = 'expense::repair-maintenance', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseUtilities = 'expense::utilities', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', EquityFunds = 'equity::funds', ExpenseAuto = 'expense::auto', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetOtherAsset = 'asset::other-asset', AssetInternalTransfers = 'asset::internal-transfers', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetDeferredTax = 'asset::deferred-tax', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseFinanceCosts = 'expense::finance-costs', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', LiabilityAccountsPayable = 'liability::accounts-payable', AssetFixedAsset = 'asset::fixed-asset', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AccountsReceivable = 'accounts-receivable', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetLeaseBuyout = 'asset::lease-buyout', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseInsurance = 'expense::insurance', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpenseHomeOffice = 'other-expense::home-office', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetGlobalTaxRefund = 'asset::global-tax-refund', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', EquityHealthcare = 'equity::healthcare', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseEquipmentRental = 'expense::equipment-rental', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetDepletableAssets = 'asset::depletable-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetInvestments = 'asset::investments', ExpenseSundry = 'expense::sundry', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetNonCurrentAssets = 'asset::non-current-assets', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', EquityCalledUpShareCapital = 'equity::called-up-share-capital', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', Income = 'income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetCapitalWip = 'asset::capital-wip', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseEntertainment = 'expense::entertainment', ExpenseOtherExternalServices = 'expense::other-external-services', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetTrustAccounts = 'asset::trust-accounts', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetSecurityDeposits = 'asset::security-deposits', OtherExpense = 'other-expense', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetInvestmentOther = 'asset::investment-other', ExpenseSuppliesMaterials = 'expense::supplies-materials', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetMoneyMarket = 'asset::money-market', RevenueIncome = 'revenue::income', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum AppliesTo { AllItems = 'all-items', SpecificItems = 'specific-items', SpecificCategories = 'specific-categories' }
export const enum ChannelAvailability { Online = 'online', AllChannels = 'all-channels', InStore = 'in-store', InApp = 'in-app' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', All = 'all', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Atm = 'atm', Mobile = 'mobile', Online = 'online', Telephone = 'telephone', Mail = 'mail' }
export const enum Status { Active = 'active', Expired = 'expired', Scheduled = 'scheduled' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum UserRoles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum ReceiverRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum Gender { Female = 'female', Male = 'male', Other = 'other', PreferNotToSay = 'prefer not to say' }
export const enum VisibilityScope { Global = 'global', Web = 'web', App = 'app', Private = 'private', Internal = 'internal' }
export const enum UserStatus { Pending = 'pending', Verified = 'verified', Banned = 'banned', Deleted = 'deleted', Active = 'active', WaitListed = 'wait-listed', Archived = 'archived', Suspended = 'suspended', Inactive = 'inactive' }
export const enum UniversalIdentifierType { Url = 'url', Number = 'number', String = 'string', Email = 'email', Uuid = 'uuid' }
export const enum TransactionType { Charge = 'charge', Refund = 'refund', Payment = 'payment', Deposit = 'deposit', Fee = 'fee', Adjustment = 'adjustment', Transfer = 'transfer', Withdrawal = 'withdrawal' }
export const enum TransactionStatus { Initiated = 'initiated', InProgress = 'in-progress', Error = 'error', Cancelled = 'cancelled', Pending = 'pending', Succeeded = 'succeeded', Failed = 'failed' }
export const enum TransactionChannel { Other = 'other', Online = 'online', InPerson = 'in-person', Atm = 'atm', BankBranch = 'bank-branch', Mail = 'mail', Telephone = 'telephone', Mobile = 'mobile' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { Weekly = 'weekly', Daily = 'daily', SemiMonthly = 'semi-monthly', Annually = 'annually', Monthly = 'monthly', AdHoc = 'ad-hoc', Minutely = 'minutely', Secondly = 'secondly', SemiAnnually = 'semi-annually', Hourly = 'hourly', Biennially = 'biennially', Triennially = 'triennially', Custom = 'custom', Quarterly = 'quarterly', Biweekly = 'biweekly' }
export const enum TaxType { Inclusive = 'inclusive', Variable = 'variable', Additive = 'additive' }
export const enum TaskStatus { OnHold = 'on-hold', Blocked = 'blocked', Cancelled = 'cancelled', InProgress = 'in-progress', Todo = 'todo', Done = 'done' }
export const enum TableType { Table = 'table', External = 'external', View = 'view', MaterializedView = 'materialized-view', Snapshot = 'snapshot' }
export const enum SupportTicketPriority { Low = 'low', High = 'high', Urgent = 'urgent', Immediate = 'immediate', Medium = 'medium' }
export const enum SupportQueryType { FeatureRequest = 'feature-request', Incident = 'incident', Question = 'question', Task = 'task', Problem = 'problem', Bug = 'bug', Feedback = 'feedback' }
export const enum StakeholderType { Other = 'other', Customer = 'customer', Partner = 'partner', Investor = 'investor', Competitor = 'competitor', Vendor = 'vendor' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum SocialPlatform { Linkedin = 'linkedin', Tumblr = 'tumblr', Skype = 'skype', OtherSocialPlatform = 'other-social-platform', Instagram = 'instagram', Facebook = 'facebook', Tiktok = 'tiktok', Twitter = 'twitter', Pinterest = 'pinterest', X = 'x', Youtube = 'youtube', Snapchat = 'snapchat', Reddit = 'reddit' }
export const enum ReviewApprovalStatus { Pending = 'pending', Revised = 'revised', Approved = 'approved', InReview = 'in-review', Rejected = 'rejected' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ReactionType { Wow = 'wow', Love = 'love', Dislike = 'dislike', Laugh = 'laugh', Interested = 'interested', Like = 'like', Angry = 'angry', Sad = 'sad', Bookmark = 'bookmark' }
export const enum PromotionType { FreeShipping = 'free-shipping', Other = 'other', Percentage = 'percentage', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', PreOrder = 'pre-order', OutOfStock = 'out-of-stock', BackOrder = 'back-order', Discontinued = 'discontinued' }
export const enum PriorityLevel { Urgent = 'urgent', Low = 'low', High = 'high', Elevated = 'elevated', Medium = 'medium' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Quantity = 'quantity', Subtotal = 'subtotal' }
export const enum PrepaidType { UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid', Prepaid = 'prepaid' }
export const enum PaymentTerm { CashInAdvance = 'cash-in-advance', Net60 = 'net-60', DueOnReceipt = 'due-on-receipt', Installment = 'installment', Prepaid = 'prepaid', Net = 'net', Prepayment = 'prepayment', DeferredPayment = 'deferred-payment', Net90 = 'net-90', CashOnDelivery = 'cash-on-delivery', CashBeforeShipment = 'cash-before-shipment', UponCompletion = 'upon-completion', DueEndOfMonth = 'due-end-of-month', Net30 = 'net-30', Custom = 'custom', CashWithOrder = 'cash-with-order' }
export const enum PaymentStatus { Cancelled = 'cancelled', Pending = 'pending', Draft = 'draft', Overdue = 'overdue', Voided = 'voided', Submitted = 'submitted', Authorized = 'authorized', Partial = 'partial', PartiallyRefunded = 'partially-refunded', Deleted = 'deleted', Succeeded = 'succeeded', Error = 'error', Processing = 'processing', Paid = 'paid', Failed = 'failed', Refunded = 'refunded', Disputed = 'disputed', Adjusted = 'adjusted' }
export const enum PaymentMethod { BankTransfer = 'bank-transfer', CashOnDelivery = 'cash-on-delivery', Check = 'check', Cash = 'cash', DebitCard = 'debit-card', MobileWallet = 'mobile-wallet', Paypal = 'paypal', CreditCard = 'credit-card', Cryptocurrency = 'cryptocurrency', Other = 'other', MobilePayment = 'mobile-payment' }
export const enum ParticipantType { Organization = 'organization', Group = 'group', User = 'user', ExternalParticipant = 'external-participant', Team = 'team' }
export const enum ParticipantEngagementStatus { Guest = 'guest', Moderator = 'moderator', Left = 'left', Inactive = 'inactive', Active = 'active', Banned = 'banned', Admin = 'admin' }
export const enum OrganizationalRole { Manager = 'manager', Contractor = 'contractor', Other = 'other', Admin = 'admin', Supervisor = 'supervisor', Employee = 'employee', Director = 'director' }
export const enum OrderingCriteria { PriceAscending = 'price-ascending', PriceDescending = 'price-descending', Rating = 'rating', Relevance = 'relevance', Alphabetical = 'alphabetical', CreationDate = 'creation-date', Manual = 'manual', Popularity = 'popularity' }
export const enum OrderStatus { Failed = 'failed', Completed = 'completed', Cancelled = 'cancelled', Disputed = 'disputed', Confirmed = 'confirmed', Pending = 'pending', Delivered = 'delivered', AwaitingShipment = 'awaiting-shipment', Refunded = 'refunded', Draft = 'draft', AwaitingPickup = 'awaiting-pickup', Abandoned = 'abandoned', AwaitingPayment = 'awaiting-payment', Processing = 'processing', Shipped = 'shipped', Returned = 'returned', OnHold = 'on-hold', PartiallyFulfilled = 'partially-fulfilled' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageWebp = 'image/webp' }
export const enum MessageReadStatus { Unsent = 'unsent', Delivered = 'delivered', Read = 'read', Failed = 'failed', Sent = 'sent' }
export const enum MessageDeliveryStatus { Error = 'error', Delivered = 'delivered', Sent = 'sent', Failed = 'failed', Pending = 'pending', Undeliverable = 'undeliverable', Read = 'read' }
export const enum MessageContentType { Document = 'document', Text = 'text', File = 'file', Video = 'video', Audio = 'audio', Link = 'link', Voice = 'voice', Html = 'html', Location = 'location', Contact = 'contact', Gif = 'gif', Sticker = 'sticker', Image = 'image' }
export const enum LifecycleStatus { Issued = 'issued', Cancelled = 'cancelled', Active = 'active', Expired = 'expired', Suspended = 'suspended', Redeemed = 'redeemed' }
export const enum LeadLifecycleStatus { New = 'new', InProcess = 'in-process', Unqualified = 'unqualified', Connected = 'connected', Converted = 'converted', AttemptedToContact = 'attempted-to-contact', BadTiming = 'bad-timing', Open = 'open', Revisited = 'revisited', Lost = 'lost' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Draft = 'draft', Pending = 'pending', Error = 'error', Corrected = 'corrected', Posted = 'posted', Voided = 'voided' }
export const enum ItemEntityStatus { Active = 'active', Deleted = 'deleted', Archived = 'archived', Pending = 'pending', Suspended = 'suspended', Completed = 'completed', Inactive = 'inactive' }
export const enum ItemCondition { Used = 'used', Damaged = 'damaged', New = 'new', LikeNew = 'like-new', Refurbished = 'refurbished', OpenBox = 'open-box' }
export const enum ItemAvailabilityStatus { Active = 'active', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Inactive = 'inactive' }
export const enum IssueLifecycleStatus { Pending = 'pending', Closed = 'closed', OnHold = 'on-hold', Resolved = 'resolved', InProgress = 'in-progress', Waiting = 'waiting', Open = 'open', Cancelled = 'cancelled' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Tax = 'tax', Shipping = 'shipping', Tip = 'tip', Other = 'other' }
export const enum InventoryStorageType { DistributionCenter = 'distribution-center', Warehouse = 'warehouse', OnlineMarketplace = 'online-marketplace', DropShipper = 'drop-shipper', Consignment = 'consignment', RetailStore = 'retail-store', Other = 'other' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageHeic = 'image/heic', ImageBmp = 'image/bmp' }
export const enum IdentityProvider { Discord = 'discord', Twitter = 'twitter', Telegram = 'telegram', Microsoft = 'microsoft', Tiktok = 'tiktok', Pinterest = 'pinterest', Slack = 'slack', Vimeo = 'vimeo', Wechat = 'wechat', Linkedin = 'linkedin', Line = 'line', Yahoo = 'yahoo', Instagram = 'instagram', Snapchat = 'snapchat', Amazon = 'amazon', Behance = 'behance', Qq = 'qq', Reddit = 'reddit', Github = 'github', Other = 'other', Dribbble = 'dribbble', Whatsapp = 'whatsapp', Facebook = 'facebook', Tumblr = 'tumblr', Flickr = 'flickr', Signal = 'signal', Google = 'google', Apple = 'apple', Paypal = 'paypal', Foursquare = 'foursquare' }
export const enum GlobalTaxType { Gst = 'gst', PropertyTax = 'property-tax', Other = 'other', ExciseTax = 'excise-tax', Vat = 'vat', SalesTax = 'sales-tax', CustomsDuty = 'customs-duty' }
export const enum GenderIdentity { Male = 'male', Other = 'other', PreferNotToSay = 'prefer-not-to-say', Female = 'female' }
export const enum FulfillmentStatus { Pending = 'pending', Cancelled = 'cancelled', Returned = 'returned', Failure = 'failure', InTransit = 'in-transit', Delivered = 'delivered' }
export const enum FinancialTransactionType { Receive = 'receive', SpendOverpayment = 'spend-overpayment', ReceivePrepayment = 'receive-prepayment', Other = 'other', Deposit = 'deposit', Sale = 'sale', Dividend = 'dividend', Spend = 'spend', Transfer = 'transfer', Chargeback = 'chargeback', Fee = 'fee', SpendPrepayment = 'spend-prepayment', ReceiveOverpayment = 'receive-overpayment', Withdrawal = 'withdrawal', Payment = 'payment', Adjustment = 'adjustment', Interest = 'interest', Refund = 'refund', Charge = 'charge' }
export const enum FinancialTransactionStatus { Disputed = 'disputed', Cleared = 'cleared', Authorized = 'authorized', Refunded = 'refunded', Pending = 'pending', SettlementInProgress = 'settlement-in-progress', Failed = 'failed', Cancelled = 'cancelled' }
export const enum FinancialTrackingCategories { Service = 'service', Location = 'location', Project = 'project', None = 'none', CostCenter = 'cost-center', Department = 'department', Customer = 'customer', Employee = 'employee', Other = 'other', Class = 'class', Vendor = 'vendor', Division = 'division', Product = 'product' }
export const enum FinancialDisputeStatus { UnderReview = 'under-review', Closed = 'closed', Won = 'won', ChargeRefunded = 'charge-refunded', Lost = 'lost', Escalated = 'escalated', AwaitingEvidence = 'awaiting-evidence', NeedsResponse = 'needs-response' }
export const enum FinancialChargeType { TransactionFee = 'transaction-fee', InterestCharge = 'interest-charge', Other = 'other', LateFee = 'late-fee', ProcessingFee = 'processing-fee', ServiceCharge = 'service-charge', Commission = 'commission' }
export const enum FinancialAccountStatus { Frozen = 'frozen', UnderReview = 'under-review', Suspended = 'suspended', Active = 'active', Inactive = 'inactive', Closed = 'closed', Delinquent = 'delinquent' }
export const enum FileType { File = 'file', Folder = 'folder', Url = 'url' }
export const enum ExpenseApprovalStatus { Processed = 'processed', Pending = 'pending', New = 'new', Reimbursed = 'reimbursed', Approved = 'approved', Reviewing = 'reviewing', Denied = 'denied', Cancelled = 'cancelled' }
export const enum EventVisibility { Confidential = 'confidential', Private = 'private', Public = 'public' }
export const enum EventStatus { Cancelled = 'cancelled', Confirmed = 'confirmed', Tentative = 'tentative' }
export const enum EventRuleType { ExcludeDates = 'exclude-dates', Repeat = 'repeat', AddDates = 'add-dates', Exclude = 'exclude' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventFrequency { Weekly = 'weekly', Monthly = 'monthly', Daily = 'daily', Yearly = 'yearly' }
export const enum EntryMethod { Emv = 'emv', OnFile = 'on-file', Swiped = 'swiped', Contactless = 'contactless', Keyed = 'keyed' }
export const enum EntityLifecycleStatus { Preorder = 'preorder', Deleted = 'deleted', Inactive = 'inactive', Scheduled = 'scheduled', Archived = 'archived', Active = 'active', Draft = 'draft' }
export const enum EntityCategory { Link = 'link', Person = 'person', Project = 'project', User = 'user', Message = 'message', Owner = 'owner', Other = 'other', Document = 'document', Event = 'event', Task = 'task' }
export const enum EmploymentType { Volunteer = 'volunteer', PartTime = 'part-time', Internship = 'internship', Temporary = 'temporary', Permanent = 'permanent', Seasonal = 'seasonal', FullTime = 'full-time', Freelance = 'freelance', Contract = 'contract' }
export const enum EmploymentAndCandidateStatus { OfferExtended = 'offer-extended', Terminated = 'terminated', NotSelected = 'not-selected', Interviewing = 'interviewing', Inactive = 'inactive', OnLeave = 'on-leave', New = 'new', Active = 'active', InReview = 'in-review', Hired = 'hired', Other = 'other' }
export const enum EmailCategoryType { Other = 'other', Governmental = 'governmental', Educational = 'educational', Spam = 'spam', Transactional = 'transactional', Business = 'business', Promotional = 'promotional', Personal = 'personal' }
export const enum DiscountType { VariableAmount = 'variable-amount', ConditionalDiscount = 'conditional-discount', FixedAmount = 'fixed-amount', VariablePercentage = 'variable-percentage', TieredDiscount = 'tiered-discount', UnknownDiscount = 'unknown-discount', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one' }
export const enum DeviceUsageType { Business = 'business', Personal = 'personal', Healthcare = 'healthcare', Educational = 'educational', Home = 'home', Other = 'other', Industrial = 'industrial' }
export const enum DayOfWeek { Friday = 'friday', Monday = 'monday', Wednesday = 'wednesday', Saturday = 'saturday', Sunday = 'sunday', Thursday = 'thursday', Tuesday = 'tuesday' }
export const enum DatabaseType { Default = 'default', Linked = 'linked', External = 'external', Public = 'public' }
export const enum DataType { Object = 'object', Array = 'array', Boolean = 'boolean', Number = 'number', Date = 'date', Json = 'json', String = 'string', Null = 'null', Undefined = 'undefined', Binary = 'binary', Timestamp = 'timestamp', Custom = 'custom' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CustomerType { B2b = 'b2b', B2c = 'b2c', Retail = 'retail', Online = 'online', Wholesale = 'wholesale', Corporate = 'corporate' }
export const enum CustomerStatus { Active = 'active', Inactive = 'inactive', Pending = 'pending', Suspended = 'suspended', Archived = 'archived' }
export const enum CustomerEligibilityStatus { SpecificConditions = 'specific-conditions', NewCustomers = 'new-customers', AllCustomers = 'all-customers', Other = 'other', VipCustomers = 'vip-customers', ReturningCustomers = 'returning-customers' }
export const enum Currency { GYD = 'gyd', LAK = 'lak', FOK = 'fok', GGP = 'ggp', GBP = 'gbp', GEL = 'gel', DJF = 'djf', IRR = 'irr', PEN = 'pen', IQD = 'iqd', KRW = 'krw', BMD = 'bmd', LBP = 'lbp', SCR = 'scr', SHP = 'shp', BRL = 'brl', AFN = 'afn', XPF = 'xpf', UAH = 'uah', SRD = 'srd', WST = 'wst', CAD = 'cad', AZN = 'azn', HRK = 'hrk', MKD = 'mkd', DOP = 'dop', FJD = 'fjd', BOB = 'bob', GMD = 'gmd', ILS = 'ils', MVR = 'mvr', MYR = 'myr', HTG = 'htg', RSD = 'rsd', KYD = 'kyd', TJS = 'tjs', JEP = 'jep', MOP = 'mop', GIP = 'gip', KZT = 'kzt', SGD = 'sgd', NZD = 'nzd', CDF = 'cdf', CRC = 'crc', BZD = 'bzd', HNL = 'hnl', UYU = 'uyu', TRY = 'try', UZS = 'uzs', VUV = 'vuv', DZD = 'dzd', MZN = 'mzn', NAD = 'nad', SOS = 'sos', KES = 'kes', ZWL = 'zwl', YER = 'yer', ANG = 'ang', KMF = 'kmf', GHS = 'ghs', XAF = 'xaf', JMD = 'jmd', LYD = 'lyd', ALL = 'all', ISK = 'isk', RWF = 'rwf', VES = 'ves', EUR = 'eur', BTN = 'btn', CUC = 'cuc', NIO = 'nio', SZL = 'szl', INR = 'inr', TOP = 'top', CUP = 'cup', CZK = 'czk', IDR = 'idr', SEK = 'sek', XOF = 'xof', NGN = 'ngn', AOA = 'aoa', BYN = 'byn', PKR = 'pkr', CHF = 'chf', KGS = 'kgs', AED = 'aed', CNY = 'cny', GTQ = 'gtq', ZAR = 'zar', JPY = 'jpy', EGP = 'egp', BHD = 'bhd', PHP = 'php', FKP = 'fkp', MMK = 'mmk', MDL = 'mdl', NOK = 'nok', MUR = 'mur', PLN = 'pln', LKR = 'lkr', AWG = 'awg', MXN = 'mxn', KWD = 'kwd', THB = 'thb', KID = 'kid', USD = 'usd', LRD = 'lrd', BGN = 'bgn', MGA = 'mga', MAD = 'mad', OMR = 'omr', RUB = 'rub', BIF = 'bif', MNT = 'mnt', PAB = 'pab', TZS = 'tzs', DKK = 'dkk', TWD = 'twd', ZMW = 'zmw', ARS = 'ars', RON = 'ron', GNF = 'gnf', AMD = 'amd', SAR = 'sar', BND = 'bnd', KPW = 'kpw', SSP = 'ssp', TMT = 'tmt', TTD = 'ttd', BAM = 'bam', XCD = 'xcd', MRU = 'mru', BWP = 'bwp', NPR = 'npr', PYG = 'pyg', XDR = 'xdr', SYP = 'syp', VND = 'vnd', IMP = 'imp', PGK = 'pgk', STN = 'stn', MWK = 'mwk', SBD = 'sbd', BBD = 'bbd', LSL = 'lsl', ETB = 'etb', BDT = 'bdt', HUF = 'huf', TND = 'tnd', KHR = 'khr', UGX = 'ugx', COP = 'cop', TVD = 'tvd', CVE = 'cve', SDG = 'sdg', JOD = 'jod', CLP = 'clp', ERN = 'ern', QAR = 'qar', AUD = 'aud', SLL = 'sll', BSD = 'bsd', HKD = 'hkd' }
export const enum CreditType { Overpayment = 'overpayment', Prepayment = 'prepayment', Supplier = 'supplier', Goodwill = 'goodwill', Customer = 'customer' }
export const enum CreditNoteStatus { Void = 'void', Cancelled = 'cancelled', Revised = 'revised', Draft = 'draft', Issued = 'issued', Applied = 'applied', Disputed = 'disputed', Pending = 'pending', Completed = 'completed' }
export const enum Country { Angola = 'angola', Kenya = 'kenya', SouthKorea = 'south-korea', Ireland = 'ireland', Turkey = 'turkey', UnitedArabEmirates = 'united-arab-emirates', Montenegro = 'montenegro', Malta = 'malta', BurkinaFaso = 'burkina-faso', Barbados = 'barbados', Guatemala = 'guatemala', Namibia = 'namibia', Switzerland = 'switzerland', Kyrgyzstan = 'kyrgyzstan', Kuwait = 'kuwait', Venezuela = 'venezuela', ElSalvador = 'el-salvador', SaintKittsAndNevis = 'saint-kitts-and-nevis', SanMarino = 'san-marino', Lithuania = 'lithuania', Syria = 'syria', CostaRica = 'costa-rica', Panama = 'panama', Algeria = 'algeria', CongoRepublic = 'congo-republic', Argentina = 'argentina', Madagascar = 'madagascar', Nauru = 'nauru', Singapore = 'singapore', Sudan = 'sudan', Togo = 'togo', Luxembourg = 'luxembourg', Tunisia = 'tunisia', Colombia = 'colombia', Ghana = 'ghana', AntiguaAndBarbuda = 'antigua-and-barbuda', Benin = 'benin', GuineaBissau = 'guinea-bissau', Maldives = 'maldives', Norway = 'norway', Albania = 'albania', Chad = 'chad', Belarus = 'belarus', MarshallIslands = 'marshall-islands', Mexico = 'mexico', Bolivia = 'bolivia', CoteDIvoire = 'cote-d-ivoire', Netherlands = 'netherlands', Laos = 'laos', Malaysia = 'malaysia', Russia = 'russia', SierraLeone = 'sierra-leone', Japan = 'japan', Turkmenistan = 'turkmenistan', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Tuvalu = 'tuvalu', Philippines = 'philippines', Yemen = 'yemen', Egypt = 'egypt', Gabon = 'gabon', Lebanon = 'lebanon', Poland = 'poland', Slovenia = 'slovenia', Zambia = 'zambia', Zimbabwe = 'zimbabwe', Libya = 'libya', Croatia = 'croatia', Spain = 'spain', Serbia = 'serbia', Andorra = 'andorra', Italy = 'italy', Nigeria = 'nigeria', Dominica = 'dominica', NorthMacedonia = 'north-macedonia', Uzbekistan = 'uzbekistan', Burundi = 'burundi', Afghanistan = 'afghanistan', CzechRepublic = 'czech-republic', Bahrain = 'bahrain', Ecuador = 'ecuador', Ethiopia = 'ethiopia', France = 'france', Greece = 'greece', Mauritius = 'mauritius', Mongolia = 'mongolia', Nicaragua = 'nicaragua', Romania = 'romania', Seychelles = 'seychelles', TrinidadAndTobago = 'trinidad-and-tobago', Austria = 'austria', UnitedKingdom = 'united-kingdom', EquatorialGuinea = 'equatorial-guinea', Estonia = 'estonia', Brunei = 'brunei', Cuba = 'cuba', Myanmar = 'myanmar', Fiji = 'fiji', Cameroon = 'cameroon', Pakistan = 'pakistan', Uganda = 'uganda', Uruguay = 'uruguay', Malawi = 'malawi', Monaco = 'monaco', Iceland = 'iceland', Botswana = 'botswana', Nepal = 'nepal', Tanzania = 'tanzania', Djibouti = 'djibouti', Hungary = 'hungary', UnitedStates = 'united-states', Niger = 'niger', Brazil = 'brazil', Germany = 'germany', NewZealand = 'new-zealand', Kiribati = 'kiribati', Morocco = 'morocco', Bahamas = 'bahamas', CongoDemocraticRepublic = 'congo-democratic-republic', Denmark = 'denmark', PapuaNewGuinea = 'papua-new-guinea', Somalia = 'somalia', TimorLeste = 'timor-leste', Latvia = 'latvia', Qatar = 'qatar', Tajikistan = 'tajikistan', Slovakia = 'slovakia', Gambia = 'gambia', Haiti = 'haiti', Micronesia = 'micronesia', Liechtenstein = 'liechtenstein', Finland = 'finland', Bulgaria = 'bulgaria', CaboVerde = 'cabo-verde', Cambodia = 'cambodia', Australia = 'australia', Grenada = 'grenada', Kazakhstan = 'kazakhstan', DominicanRepublic = 'dominican-republic', Palau = 'palau', China = 'china', Moldova = 'moldova', Palestine = 'palestine', Portugal = 'portugal', Ukraine = 'ukraine', Mali = 'mali', India = 'india', Peru = 'peru', Rwanda = 'rwanda', SaoTomeAndPrincipe = 'sao-tome-and-principe', Iran = 'iran', Samoa = 'samoa', Senegal = 'senegal', Vanuatu = 'vanuatu', Comoros = 'comoros', Suriname = 'suriname', Belize = 'belize', Indonesia = 'indonesia', Canada = 'canada', Eritrea = 'eritrea', SaudiArabia = 'saudi-arabia', Chile = 'chile', Guinea = 'guinea', Mozambique = 'mozambique', CentralAfricanRepublic = 'central-african-republic', Armenia = 'armenia', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Bangladesh = 'bangladesh', Bhutan = 'bhutan', Cyprus = 'cyprus', Jamaica = 'jamaica', Lesotho = 'lesotho', Taiwan = 'taiwan', Jordan = 'jordan', Israel = 'israel', Paraguay = 'paraguay', Mauritania = 'mauritania', SaintLucia = 'saint-lucia', Belgium = 'belgium', Honduras = 'honduras', Guyana = 'guyana', Azerbaijan = 'azerbaijan', Eswatini = 'eswatini', Georgia = 'georgia', Liberia = 'liberia', SouthAfrica = 'south-africa', Oman = 'oman', SouthSudan = 'south-sudan', Tonga = 'tonga', Iraq = 'iraq', Thailand = 'thailand', Vietnam = 'vietnam', NorthKorea = 'north-korea', VaticanCity = 'vatican-city', Sweden = 'sweden', SolomonIslands = 'solomon-islands', SriLanka = 'sri-lanka' }
export const enum ConversationStatus { Deleted = 'deleted', Closed = 'closed', Active = 'active', Archived = 'archived', Snoozed = 'snoozed' }
export const enum ContentVisibility { Protected = 'protected', Shared = 'shared', Internal = 'internal', Public = 'public', Private = 'private' }
export const enum ContactAddressType { Home = 'home', Billing = 'billing', Temporary = 'temporary', Personal = 'personal', Work = 'work', Business = 'business', Shipping = 'shipping', Other = 'other' }
export const enum CommunicationRole { Member = 'member', Owner = 'owner', Group = 'group', Channel = 'channel', System = 'system', Bot = 'bot', Service = 'service', Moderator = 'moderator', Guest = 'guest', Admin = 'admin', Assistant = 'assistant', User = 'user' }
export const enum CommunicationMethod { Text = 'text', Sms = 'sms', SocialMedia = 'social-media', VideoCall = 'video-call', Email = 'email', Phone = 'phone', Mail = 'mail', InstantMessage = 'instant-message', Other = 'other', InPerson = 'in-person', PushNotification = 'push-notification' }
export const enum ChatType { Group = 'group', Public = 'public', Private = 'private' }
export const enum CardType { Debit = 'debit', UnknownCard = 'unknown-card', Credit = 'credit' }
export const enum CampaignType { Other = 'other', SearchEngine = 'search-engine', Email = 'email', Display = 'display', SocialMedia = 'social-media' }
export const enum CampaignStatus { Draft = 'draft', Planned = 'planned', Paused = 'paused', Cancelled = 'cancelled', Scheduled = 'scheduled', Active = 'active', Archived = 'archived', Completed = 'completed' }
export const enum CallDirection { Outbound = 'outbound', Unknown = 'unknown', Conference = 'conference', Inbound = 'inbound' }
export const enum BillingStatus { Voided = 'voided', Pending = 'pending', Authorised = 'authorised', PartiallyPaid = 'partially-paid', Overdue = 'overdue', Deleted = 'deleted', Unpaid = 'unpaid', Draft = 'draft', Paid = 'paid', Submitted = 'submitted' }
export const enum AvcStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum AuditOpinionType { Adverse = 'adverse', Unqualified = 'unqualified', Qualified = 'qualified', Disclaimer = 'disclaimer' }
export const enum AiToolChoiceType { None = 'none', Any = 'any', Auto = 'auto', Tool = 'tool' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', Image = 'image', Text = 'text', ToolUse = 'tool-use' }
export const enum AccountingAccountType { OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityPartnerContributions = 'equity::partner-contributions', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherExpenseHomeOffice = 'other-expense::home-office', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseAmortization = 'other-expense::amortization', AssetLandAsset = 'asset::land-asset', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', LiabilityLongTermDebit = 'liability::long-term-debit', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetBank = 'asset::bank', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetLoansToOthers = 'asset::loans-to-others', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityFunds = 'equity::funds', ExpenseBankCharges = 'expense::bank-charges', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseAuto = 'expense::auto', EquityPartnerDistributions = 'equity::partner-distributions', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', CostOfGoodsSold = 'cost-of-goods-sold', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseOfficeExpenses = 'expense::office-expenses', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpensePurchasesRebates = 'expense::purchases-rebates', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetInternalTransfers = 'asset::internal-transfers', AssetSecurityDeposits = 'asset::security-deposits', ExpenseStaffCosts = 'expense::staff-costs', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetParticipatingInterests = 'asset::participating-interests', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseManagementCompensation = 'expense::management-compensation', EquityCapitalReserves = 'equity::capital-reserves', AssetFixedAsset = 'asset::fixed-asset', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', Expense = 'expense', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpensePromotionalMeals = 'expense::promotional-meals', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherIncome = 'other-income', AssetLoansToOfficers = 'asset::loans-to-officers', AssetMoneyMarket = 'asset::money-market', AssetDevelopmentCosts = 'asset::development-costs', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetBuildings = 'asset::buildings', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', LiabilityBankLoans = 'liability::bank-loans', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', EquityPersonalExpense = 'equity::personal-expense', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', Asset = 'asset', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseBadDebts = 'expense::bad-debts', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetNonCurrentAssets = 'asset::non-current-assets', AssetCapitalWip = 'asset::capital-wip', AssetLeaseholdImprovements = 'asset::leasehold-improvements', ExpenseSundry = 'expense::sundry', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetDepletableAssets = 'asset::depletable-assets', AssetFixedAssetComputers = 'asset::fixed-asset-computers', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', ExpenseRepairMaintenance = 'expense::repair-maintenance', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetLongTermInvestments = 'asset::long-term-investments', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpenseDepletion = 'other-expense::depletion', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseOtherExternalServices = 'expense::other-external-services', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', EquityShareCapital = 'equity::share-capital', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseBorrowingCost = 'expense::borrowing-cost', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseDistributionCosts = 'expense::distribution-costs', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetTrustAccounts = 'asset::trust-accounts', ExpenseInterestPaid = 'expense::interest-paid', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetOtherConsumables = 'asset::other-consumables', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseEntertainment = 'expense::entertainment', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityPartnersEquity = 'equity::partners-equity', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetRetainage = 'asset::retainage', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetInventory = 'asset::inventory', ExpenseTravel = 'expense::travel', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseFinanceCosts = 'expense::finance-costs', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpenseInsurance = 'expense::insurance', RevenueSalesRetail = 'revenue::sales-retail', AssetChecking = 'asset::checking', LiabilityAccountsPayable = 'liability::accounts-payable', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseUtilities = 'other-expense::utilities', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityNotesPayable = 'liability::notes-payable', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', ExpenseExternalServices = 'expense::external-services', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetAccumulatedDepletion = 'asset::accumulated-depletion', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AccountsReceivable = 'accounts-receivable', EquityPersonalIncome = 'equity::personal-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseUtilities = 'expense::utilities', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', RevenueIncome = 'revenue::income', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityCommonStock = 'equity::common-stock', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityEstimatedTaxes = 'equity::estimated-taxes', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityInvestmentGrants = 'equity::investment-grants', EquityPreferredStock = 'equity::preferred-stock', AssetIntangibleAssets = 'asset::intangible-assets', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherIncomeInterestEarned = 'other-income::interest-earned', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', Equity = 'equity', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', EquityHealthcare = 'equity::healthcare', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseEquipmentRental = 'expense::equipment-rental', EquityTreasuryStock = 'equity::treasury-stock', OtherExpense = 'other-expense', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityOwnersEquity = 'equity::owners-equity', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetLicenses = 'asset::licenses', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiability = 'other-current-liability', AssetOrganizationalCosts = 'asset::organizational-costs', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpenseAmortizationExpense = 'expense::amortization-expense', RevenueOperatingGrants = 'revenue::operating-grants', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetInvestments = 'asset::investments', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetGoodwill = 'asset::goodwill', AssetSavings = 'asset::savings', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetCashOnHand = 'asset::cash-on-hand', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetLand = 'asset::land', LiabilityCreditCard = 'liability::credit-card', AssetDeferredTax = 'asset::deferred-tax', OtherExpenseVehicle = 'other-expense::vehicle', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', RevenueNonProfitIncome = 'revenue::non-profit-income', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetOtherAsset = 'asset::other-asset', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetInvestmentOther = 'asset::investment-other', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseTravelMeals = 'expense::travel-meals', AssetVehicles = 'asset::vehicles', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetMachineryAndEquipment = 'asset::machinery-and-equipment' }
export const enum AccountStatus { Inactive = 'inactive', Closed = 'closed', Pending = 'pending', Active = 'active', Suspended = 'suspended' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Warm = 'warm', Cold = 'cold', Hot = 'hot' }
export const enum AccessControlModel { Abac = 'abac', Rbac = 'rbac', Dac = 'dac', Mac = 'mac', Custom = 'custom', None = 'none' }

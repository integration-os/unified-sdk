// This file is auto-generated. Do not edit it manually.

export interface Weather { feelsLikeF?: string;
    windSpeedMph?: string;
    windSpeedKph?: string;
    commonModel?: string;
    country?: string;
    humidity?: string;
    temperatureFahrenheit?: string;
    description?: string;
    temperatureCelsius?: string;
    location?: string;
    region?: string;
    windDirection?: string;
    feelsLikeC?: string }
export interface WorkExperiences { description?: string;
    endDate?: string;
    commonModel?: string;
    companyName?: string;
    startDate?: string;
    position?: string }
export interface Webhooks { id?: string;
    modifyToken?: string;
    address?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    format?: Format;
    commonModel?: string;
    createdAt?: string;
    objects?: string[];
    events?: string[] }
export interface Vendors { accountNumber?: string;
    overdueBalance?: number;
    contactPhoneNumber?: string;
    isActive?: boolean;
    is1099?: boolean;
    modifyToken?: string;
    currency?: string;
    companyName?: string;
    note?: string;
    id?: string;
    updatedAt?: string;
    address?: Addresses;
    tax?: Taxes[];
    contactEmail?: string;
    isDeleted?: boolean;
    outstandingBalance?: number;
    contactName?: string;
    website?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    commonModel?: string }
export interface Variants { weight?: number;
    sku?: string;
    createdAt?: string;
    dimensions?: Dimensions;
    productId?: string;
    title?: string;
    isTaxable?: boolean;
    updatedAt?: string;
    status?: ItemAvailabilityStatus;
    isDeleted?: boolean;
    inventoryQuantity?: number;
    isDefault?: boolean;
    weightUnit?: string;
    imageId?: number;
    isActive?: boolean;
    requiresShipping?: boolean;
    id?: string;
    modifyToken?: string;
    price?: number;
    compareAtPrice?: number;
    commonModel?: string;
    barcode?: string }
export interface Users { username?: string;
    updatedAt?: string;
    roles?: Roles[];
    bio?: string;
    website?: string;
    socialProfiles?: SocialProfiles[];
    status?: UserStatus;
    middleName?: string;
    sso?: SSO[];
    profilePicture?: Images;
    id?: string;
    isActive?: boolean;
    paymentMethod?: PaymentMethods;
    password?: string;
    lastName?: string;
    modifyToken?: string;
    firstName?: string;
    gender?: Gender;
    coverPhoto?: Images;
    addresses?: Addresses[];
    dateOfBirth?: string;
    createdAt?: string;
    commonModel?: string;
    preferences?: Preferences;
    email?: string;
    phoneNumber?: string;
    lastLogin?: string }
export interface UserOrGroup { type?: ParticipantType;
    displayName?: string;
    commonModel?: string;
    identifier?: string }
export interface UsageLimitExpirations { commonModel?: string;
    expirationDate?: string;
    limit?: number }
export interface Transcripts { modifyToken?: string;
    speakerName?: string;
    topic?: string;
    speakerId?: string;
    commonModel?: string;
    meetingId?: string;
    updatedAt?: string;
    id?: string;
    sentences?: Sentences[];
    createdAt?: string }
export interface Transactions { applicationFee?: number;
    taxExempt?: boolean;
    checkNumber?: string;
    type?: FinancialTransactionType;
    invoiceId?: string;
    amount?: number;
    metadata?: Metadata;
    exchangeRate?: number;
    modifyToken?: string;
    sender?: Customers;
    transactionCategory?: TransactionType;
    orderId?: string;
    accountCode?: string;
    currency?: Currency;
    items?: Items[];
    date?: string;
    foreignCurrency?: CurrencyDetails;
    id?: string;
    creditAmount?: number;
    refund?: Refunds;
    billingDetails?: BillingDetails;
    taxAmount?: number;
    shippingDetails?: ShippingDetails;
    isDeleted?: boolean;
    attachments?: Attachments[];
    paymentMethod?: PaymentMethods;
    accountName?: string;
    tags?: string[];
    commonModel?: string;
    recipient?: Customers;
    transactionMethod?: TransactionMethod;
    createdAt?: string;
    accountId?: string;
    debitAmount?: number;
    dispute?: Disputes;
    updatedAt?: string;
    status?: FinancialTransactionStatus;
    description?: string;
    paymentIntent?: string;
    contact?: Contacts }
export interface TransactionDetails { status?: string;
    transactionId?: string;
    amount?: number;
    commonModel?: string }
export interface ToolResultContent { commonModel?: string;
    text?: string[];
    type?: AiMessagesContentType;
    image?: Images }
export interface ToolCalls { commonModel?: string;
    id?: string;
    type?: ToolCallType;
    modifyToken?: string;
    function?: unknown }
export interface TimeSession { commonModel?: string;
    openTime?: string;
    closeTime?: string }
export interface Tickets { id?: string;
    status?: IssueLifecycleStatus;
    attachments?: Attachments[];
    notes?: Notes[];
    customFields?: CustomAttributes[];
    typeId?: string;
    priority?: SupportTicketPriority;
    modifyToken?: string;
    createdAt?: string;
    companyId?: string;
    reporter?: Contacts;
    comments?: Comments[];
    assignee?: Users;
    description?: string;
    updatedAt?: string;
    category?: Categories;
    dueDate?: string;
    tags?: string[];
    commonModel?: string;
    type?: SupportQueryType;
    admin?: Users;
    title?: string }
export interface Threads { modifyToken?: string;
    commonModel?: string;
    lastMessageId?: string;
    messages?: Messages[];
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    lastHistoryId?: string;
    isDeleted?: boolean;
    snippet?: string;
    tags?: KeyValues[] }
export interface Taxes { isActive?: boolean;
    country?: string;
    isDeleted?: boolean;
    category?: string;
    commonModel?: string;
    id?: string;
    type?: TaxType;
    region?: string;
    createdAt?: string;
    name?: string;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    isTaxable?: boolean;
    currency?: Currency;
    description?: string;
    code?: string;
    rate?: number;
    amount?: number;
    jurisdiction?: string }
export interface TaxRates { name?: string;
    country?: string;
    commonModel?: string;
    taxNumber?: string;
    region?: string;
    taxProvider?: string;
    displayRate?: string;
    applicableItems?: string[];
    currency?: Currency;
    percentage?: number;
    isActive?: boolean;
    updatedAt?: string;
    modifyToken?: string;
    description?: string;
    createdAt?: string;
    id?: string;
    shippingIncluded?: boolean;
    taxType?: string;
    isCompound?: boolean;
    taxComponents?: TaxLines[];
    customFields?: CustomAttributes[];
    reportTaxType?: string;
    isDeleted?: boolean }
export interface TaxLines { id?: string;
    title?: string;
    isActive?: boolean;
    isInclusive?: boolean;
    taxCode?: string;
    commonModel?: string;
    createdAt?: string;
    name?: string;
    metadata?: Metadata;
    price?: number;
    isNonRecoverable?: boolean;
    rate?: number;
    isDeleted?: boolean;
    updatedAt?: string;
    isCompound?: boolean }
export interface TaxDetails { isDeleted?: boolean;
    updatedAt?: string;
    createdAt?: string;
    taxRegistrationNumber?: string;
    isTaxIncludedInPrice?: boolean;
    category?: string;
    rate?: number;
    isActive?: boolean;
    commonModel?: string;
    id?: string;
    taxCode?: string;
    region?: string;
    details?: string;
    currency?: Currency;
    effectiveDate?: string;
    name?: string;
    expirationDate?: string;
    jurisdiction?: string;
    amount?: number;
    country?: string }
export interface Tasks { status?: TaskStatus;
    subTaskIds?: string[];
    createdBy?: Users;
    comments?: Comments[];
    createdAt?: string;
    updatedAt?: string;
    parentTaskId?: string;
    watchers?: Users[];
    modifyToken?: string;
    priority?: PriorityLevel;
    customFields?: CustomAttributes[];
    description?: string;
    dependOnTaskIds?: string[];
    notifications?: Notifications[];
    dueDate?: string;
    repeat?: string;
    commonModel?: string;
    dueTimezone?: string;
    timeEstimate?: string;
    timeLogged?: string;
    id?: string;
    title?: string;
    relatedToTaskId?: string[];
    attachments?: Attachments[];
    labels?: string[];
    completionPercentage?: number;
    assignee?: Users }
export interface Tables { url?: string;
    name?: string;
    id?: string;
    description?: string;
    fields?: Attributes[];
    databaseId?: string;
    createdAt?: string;
    modifyToken?: string;
    commonModel?: string;
    region?: string;
    slug?: string;
    expiresIn?: string;
    type?: TableType;
    updatedAt?: string;
    projectId?: string }
export interface Stores { name?: string;
    updatedAt?: string;
    email?: string;
    manager?: Staff;
    id?: string;
    country?: string;
    description?: string;
    websiteUrl?: string;
    language?: string;
    latitude?: number;
    isOperating?: boolean;
    features?: string[];
    address?: Addresses;
    createdAt?: string;
    timezone?: string;
    storeArea?: number;
    owner?: Users;
    longitude?: number;
    logoUrl?: string;
    commonModel?: string;
    countryCode?: string;
    paymentMethods?: string[];
    relatedStores?: Stores[];
    currency?: Currency;
    businessHours?: BusinessHours[];
    category?: string;
    ratings?: RatingsReviews;
    socialProfiles?: SocialProfiles[];
    phone?: string }
export interface Staff { id?: string;
    dateOfBirth?: string;
    phone?: string;
    storeID?: string;
    lastName?: string;
    status?: EmploymentAndCandidateStatus;
    gender?: string;
    firstName?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    isDeleted?: boolean;
    customFields?: CustomAttributes[];
    isActive?: boolean;
    position?: string;
    photoUrl?: string;
    role?: OrganizationalRole;
    addresses?: Addresses }
export interface Speakers { commonModel?: string;
    userId?: string;
    role?: SpeakerRole;
    id?: string;
    speakerId?: string;
    title?: string;
    email?: string;
    name?: string }
export interface SocialProfiles { additionalInfo?: Metadata;
    url?: string;
    commonModel?: string;
    displayName?: string;
    isActive?: boolean;
    type?: SocialPlatform;
    username?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    avatarUrl?: string }
export interface ShippingItem { productName?: string;
    id?: string;
    value?: number;
    commonModel?: string;
    quantity?: number;
    sku?: string;
    weight?: number;
    weightUnit?: string;
    dimensions?: Dimensions;
    productId?: string }
export interface ShippingDetails { isDeleted?: boolean;
    estimatedDelivery?: string;
    insurance?: boolean;
    provider?: string;
    commonModel?: string;
    address?: Addresses;
    updatedAt?: string;
    price?: number;
    method?: string;
    signatureRequired?: boolean;
    createdAt?: string;
    isActive?: boolean;
    trackingNumber?: string }
export interface ShareholderEquityDetails { treasuryStock?: number;
    accumulatedOtherComprehensiveIncome?: number;
    commonStock?: number;
    preferredStock?: number;
    retainedEarnings?: number;
    commonModel?: string }
export interface Sentences { modifyToken?: string;
    sentence?: string;
    commonModel?: string;
    createdAt?: string;
    startTime?: string;
    endTime?: string;
    id?: string;
    updatedAt?: string;
    speakerName?: string;
    speakerId?: string }
export interface Salaries { currency?: Currency;
    paymentPeriod?: TimeCycle;
    commonModel?: string;
    value?: number }
export interface SSO { providerUserId?: string;
    expiryDate?: string;
    refreshToken?: string;
    scopes?: string[];
    profileUrl?: string;
    commonModel?: string;
    provider?: IdentityProvider;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    tokenType?: string;
    expiresIn?: number;
    isDeleted?: boolean;
    accessToken?: string }
export interface RevenueDetails { commonModel?: string;
    salesRevenue?: number;
    serviceRevenue?: number;
    otherRevenue?: number }
export interface ResponseFormat { schema?: JsonSchema;
    commonModel?: string;
    type?: ResponseFormatType }
export interface Refunds { paymentId?: string;
    amount?: number;
    createdAt?: string;
    status?: TransactionStatus;
    updatedAt?: string;
    modifyToken?: string;
    id?: string;
    commonModel?: string;
    currency?: Currency;
    reason?: string }
export interface References { companyName?: string;
    email?: string;
    phoneNumber?: string;
    relationship?: string;
    name?: string;
    commonModel?: string;
    position?: string }
export interface Records { commonModel?: string;
    updatedAt?: string;
    createdAt?: string;
    id?: string;
    modifyToken?: string;
    entity?: unknown }
export interface Recordings { fileSize?: number;
    id?: string;
    hostId?: string;
    modifyToken?: string;
    name?: string;
    duration?: number;
    startTime?: string;
    files?: Attachments[];
    topic?: string;
    accountId?: string;
    callType?: CallDirection;
    description?: string;
    endTime?: string;
    createdAt?: string;
    commonModel?: string;
    updatedAt?: string;
    password?: string;
    participants?: Speakers[] }
export interface Reactions { createdAt?: string;
    messageId?: string;
    type?: ReactionType;
    commonModel?: string;
    userId?: string;
    chatId?: string }
export interface RatingsReviews { isActive?: boolean;
    storeID?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    review?: string;
    rating?: number;
    createdAt?: string;
    locale?: string;
    commonModel?: string;
    id?: string;
    reviewerName?: string;
    status?: ReviewApprovalStatus;
    verifiedPurchase?: boolean;
    metadata?: Metadata }
export interface PurchaseOrders { expectedDeliveryDate?: string;
    subtotal?: number;
    total?: number;
    createdAt?: string;
    updatedAt?: string;
    orderDate?: string;
    items?: PurchaseOrderItems[];
    orderNumber?: string;
    shippingCosts?: number;
    paymentTerms?: string;
    isDeleted?: boolean;
    commonModel?: string;
    taxes?: number;
    currency?: Currency;
    billTo?: Addresses;
    status?: OrderStatus;
    notes?: string;
    modifyToken?: string;
    vendor?: Vendors;
    id?: string;
    shipTo?: Addresses;
    attachments?: Attachments[];
    accountId?: string;
    isActive?: boolean }
export interface PurchaseOrderItems { commonModel?: string;
    unitPrice?: number;
    productId?: string;
    id?: string;
    description?: string;
    SKU?: string;
    unitOfMeasure?: string;
    discount?: number;
    deliveryDate?: string;
    totalPrice?: number;
    quantity?: number }
export interface Promotions { discountType?: DiscountType;
    isActive?: boolean;
    description?: string;
    eligibleItems?: string[];
    usageLimit?: number;
    updatedAt?: string;
    currency?: Currency;
    isDeleted?: boolean;
    commonModel?: string;
    endDate?: string;
    limitPerCustomer?: number;
    discountValue?: number;
    startDate?: string;
    minimumPurchaseAmount?: number;
    customerEligibility?: CustomerEligibilityStatus;
    createdAt?: string;
    termsAndConditions?: string;
    type?: PromotionType;
    code?: string }
export interface Projects { modifyToken?: string;
    createdAt?: string;
    updatedAt?: string;
    friendlyName?: string;
    name?: string;
    id?: string;
    commonModel?: string }
export interface Products { code?: string;
    images?: Images[];
    weight?: number;
    brand?: Brands;
    weightUnit?: string;
    seoKeywords?: string[];
    manufacturerName?: string;
    variants?: Variants[];
    title?: string;
    metaDescription?: string;
    isDownloadable?: boolean;
    sku?: string;
    updatedAt?: string;
    status?: EntityLifecycleStatus;
    dimensions?: Dimensions;
    id?: string;
    metaTitle?: string;
    customFields?: CustomAttributes[];
    publishedAt?: string;
    commonModel?: string;
    slug?: string;
    categories?: string[];
    taxes?: Taxes[];
    prices?: Prices[];
    tags?: string[];
    reference?: Entity;
    description?: string;
    inventoryQuantity?: number;
    downloadFiles?: Attachments[];
    relatedProducts?: string[];
    options?: ProductOptions[];
    createdAt?: string;
    accountIds?: KeyValues[];
    localizations?: Localizations[];
    modifyToken?: string;
    inventoryLocation?: InventoryLocations;
    vendor?: string;
    type?: string;
    availableForSale?: boolean;
    skuValidation?: SkuValidation }
export interface ProductOptions { createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    productId?: number;
    id?: string;
    name?: string;
    values?: string[] }
export interface Prices { amount?: number;
    type?: string;
    currency?: Currency;
    commonModel?: string }
export interface PriceRules { entitledCountryIds?: string[];
    oncePerCustomer?: boolean;
    entitledProductIds?: string[];
    prerequisiteQuantity?: number;
    prerequisiteCollectionIds?: string[];
    prerequisiteSavedSearchIds?: string[];
    targetSelection?: TargetSelection;
    targetType?: TargetType;
    isActive?: boolean;
    excludedVariantIds?: string[];
    prerequisiteRanges?: PrerequisiteRanges;
    updatedAt?: string;
    prerequisiteProductIds?: string[];
    entitledCollectionIds?: string[];
    priority?: number;
    startDate?: string;
    entitledQuantity?: number;
    allocationMethod?: AllocationMethod;
    description?: string;
    currency?: string;
    createdAt?: string;
    value?: number;
    excludedProductIds?: string[];
    prerequisiteCustomerIds?: string[];
    excludedCollectionIds?: string[];
    modifyToken?: string;
    valueType?: DiscountType;
    title?: string;
    usageLimit?: number;
    endDate?: string;
    commonModel?: string;
    allocationLimit?: number;
    prerequisiteVariantIds?: string[];
    entitledVariantIds?: string[];
    customerSelection?: CustomerSelection;
    isDeleted?: boolean;
    id?: string }
export interface PrerequisiteRanges { type?: PrerequisiteRangeType;
    greaterThanOrEqualTo?: number;
    commonModel?: string;
    lessThanOrEqualTo?: number }
export interface Preferences { communications?: CommunicationMethod;
    commonModel?: string;
    language?: string;
    currency?: Currency;
    timeZone?: string;
    id?: string }
export interface Phones { country?: string;
    countryCode?: string;
    type?: DeviceUsageType;
    phoneNumber?: string;
    commonModel?: string }
export interface Permissions { roles?: string[];
    commonModel?: string;
    canEdit?: string[];
    accessControlType?: AccessControlModel;
    canView?: string[];
    assigneeDetails?: UserOrGroup;
    canDelete?: string[];
    identifierType?: UniversalIdentifierType }
export interface PerformanceMetrics { costPerConversion?: number;
    commonModel?: string;
    returnOnInvestment?: number;
    conversionRate?: number;
    spend?: number;
    costPerClick?: number;
    impressions?: number;
    conversions?: number;
    clicks?: number }
export interface Payments { refund?: Refunds;
    webhookUrl?: string;
    receiptEmail?: string;
    orderId?: string;
    updatedAt?: string;
    paymentProcessor?: string;
    cardDetails?: CardDetails;
    amount?: number;
    tip?: number;
    paymentIntent?: string;
    modifyToken?: string;
    createdAt?: string;
    billingDetails?: BillingDetails;
    commonModel?: string;
    currency?: Currency;
    transactionId?: string;
    journalId?: string;
    customer?: Customers;
    isDeleted?: boolean;
    notes?: string;
    paymentMethod?: PaymentMethods;
    metadata?: Metadata;
    paymentCaptureMethod?: string;
    description?: string;
    invoice?: Invoices;
    id?: string;
    shippingDetails?: ShippingDetails;
    status?: PaymentStatus;
    date?: string;
    isActive?: boolean }
export interface PaymentTerms { gracePeriodDays?: number;
    commonModel?: string;
    dueDays?: number;
    discountRate?: number;
    allowedMethods?: string[];
    permittedClientClasses?: string[];
    minimumPayment?: number;
    countrySpecificTerms?: string[];
    currency?: string;
    notes?: string;
    languageSupport?: string[];
    createdAt?: string;
    updatedAt?: string;
    penaltyRate?: number;
    lastUpdatedDate?: string;
    description?: string;
    discountDays?: number;
    isDeleted?: boolean;
    id?: string;
    currencyFormatting?: string;
    type?: PaymentTerm;
    isActive?: boolean;
    createdDate?: string;
    interestRate?: number }
export interface PaymentMethods { id?: string;
    commonModel?: string;
    type?: PaymentMethod;
    details?: string;
    isDefault?: boolean }
export interface PaymentDetails { method?: string;
    paymentGateway?: string;
    billingAddress?: Addresses;
    updatedAt?: string;
    status?: string;
    amount?: number;
    commonModel?: string;
    transactionId?: string;
    createdAt?: string;
    isDeleted?: boolean;
    isActive?: boolean;
    isRefunded?: boolean;
    currency?: Currency }
export interface Participants { status?: ParticipantEngagementStatus;
    commonModel?: string;
    joinedAt?: string;
    userId?: string;
    type?: CommunicationRole;
    displayName?: string }
export interface ParentFolders { commonModel?: string;
    updatedAt?: string;
    id?: string;
    name?: string;
    createdAt?: string }
export interface Orders { tax?: number;
    billingAddress?: Addresses;
    commonModel?: string;
    id?: string;
    shippingCost?: number;
    paymentStatus?: PaymentStatus;
    paymentMethods?: string[];
    subtotal?: number;
    tip?: number;
    note?: string;
    reference?: Entity;
    discounts?: Discounts[];
    items?: Items[];
    status?: OrderStatus;
    shippingId?: string;
    modifyToken?: string;
    currency?: Currency;
    createdAt?: string;
    customerId?: string;
    storeLocationId?: string;
    shippingMethod?: string;
    updatedAt?: string;
    shippingAddress?: Addresses;
    trackingInfo?: string;
    orderNumber?: string;
    tags?: string[];
    total?: number;
    taxes?: Taxes[] }
export interface Opportunities { modifyToken?: string;
    probability?: number;
    customFields?: CustomAttributes[];
    stage?: string;
    id?: string;
    contacts?: Contacts[];
    tags?: string[];
    companyId?: string;
    isClosed?: boolean;
    companyName?: string;
    type?: string;
    currency?: Currency;
    updatedAt?: string;
    owner?: Users;
    campaign?: Campaigns;
    entity?: Entity;
    title?: string;
    leadId?: string;
    nextStep?: string;
    attachments?: Attachments[];
    amount?: number;
    closeDate?: string;
    leadSource?: string;
    isWon?: boolean;
    commonModel?: string;
    createdAt?: string;
    lostReason?: string;
    description?: string;
    notes?: string[] }
export interface OperatingExpensesDetails { salesGeneralAndAdministrativeExpenses?: number;
    researchAndDevelopmentExpenses?: number;
    otherOperatingExpenses?: number;
    commonModel?: string }
export interface Objects { pluralNoun?: string;
    id?: string;
    singularNoun?: string;
    commonModel?: string;
    custom?: boolean;
    slug?: string;
    modifyToken?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Notifications { commonModel?: string;
    title?: string;
    recipient?: Users;
    isActive?: boolean;
    message?: string;
    status?: string;
    priority?: PriorityLevel;
    createdAt?: string;
    attachments?: Attachments[];
    isDeleted?: boolean;
    channel?: string;
    notificationId?: string;
    customFields?: CustomAttributes[];
    type?: string;
    updatedAt?: string }
export interface Notes { priority?: PriorityLevel;
    updatedAt?: string;
    author?: Users;
    attachments?: Attachments[];
    modifyToken?: string;
    title?: string;
    id?: string;
    commonModel?: string;
    content?: string;
    lastAccessed?: string;
    reminder?: string;
    tags?: string[];
    createdAt?: string;
    url?: string;
    sharedWith?: Users[];
    metadata?: string[];
    color?: string;
    visibility?: ContentVisibility }
export interface Modifiers { groupId?: string;
    id?: string;
    quantity?: number;
    name?: string;
    customerNote?: string;
    originalPrice?: number;
    createdAt?: string;
    isActive?: boolean;
    commonModel?: string;
    isDeleted?: boolean;
    updatedAt?: string;
    modifyToken?: string;
    linePrice?: number;
    currency?: Currency }
export interface ModifierGroups { commonModel?: string;
    isActive?: boolean;
    modifiers?: Modifiers[];
    name?: string;
    modifyToken?: string;
    isDeleted?: boolean;
    id?: string;
    description?: string;
    createdAt?: string;
    type?: ModifierType;
    updatedAt?: string }
export interface Metadata { commonModel?: string;
    id?: string;
    entityId?: string;
    valueParsingRequired?: boolean;
    type?: DataType;
    key?: string;
    value?: string;
    entityType?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Messages { threadId?: string;
    isActive?: boolean;
    senderId?: string;
    receiverId?: string;
    type?: MessageContentType;
    id?: string;
    historyId?: string;
    content?: string;
    createdAt?: string;
    subject?: string;
    senderEmail?: string;
    modifyToken?: string;
    updatedAt?: string;
    receiverRoles?: ReceiverRoles[];
    medium?: string;
    reactions?: Reactions[];
    timestamp?: string;
    tags?: KeyValues[];
    metadata?: Metadata[];
    deliveryStatus?: MessageDeliveryStatus;
    chatId?: string;
    bcc?: string;
    attachments?: Attachments[];
    trackingSettings?: KeyValues[];
    commonModel?: string;
    templateId?: string;
    messageType?: string;
    recipientEmails?: string[];
    readStatus?: MessageReadStatus;
    priority?: PriorityLevel;
    isDeleted?: boolean;
    replyToMessageId?: string;
    cc?: string;
    reference?: Entity }
export interface Locations { phones?: Phones[];
    commonModel?: string;
    countryCode?: string;
    isActive?: boolean;
    socialProfiles?: SocialProfiles[];
    emails?: Emails[];
    customFields?: CustomAttributes[];
    defaultEmail?: string;
    id?: string;
    updatedAt?: string;
    businessName?: string;
    currency?: Currency;
    type?: string;
    domain?: string;
    tags?: string[];
    createdAt?: string;
    timezone?: string;
    modifyToken?: string;
    locationNumber?: string;
    address?: Addresses;
    name?: string;
    description?: string;
    website?: string;
    businessHours?: BusinessHours[];
    merchantId?: string;
    merchantCategoryCode?: string;
    defaultPhoneNumber?: string;
    numberOfEmployees?: number }
export interface Localizations { metaDescription?: string;
    commonModel?: string;
    description?: string;
    locale?: string;
    title?: string;
    metaTitle?: string }
export interface Leads { emails?: Emails[];
    companyId?: string;
    commonModel?: string;
    jobTitle?: string;
    leadSource?: LeadSource;
    middleName?: string;
    defaultPhoneNumber?: string;
    website?: string;
    modifyToken?: string;
    socialProfiles?: SocialProfiles[];
    leadStatus?: LeadLifecycleStatus;
    updatedAt?: string;
    numberOfEmployees?: number;
    opportunities?: Opportunities[];
    industry?: string;
    preferredContactMethod?: CommunicationMethod;
    annualRevenue?: number;
    entity?: Entity;
    firstName?: string;
    createdAt?: string;
    customFields?: CustomAttributes[];
    companyName?: string;
    defaultEmail?: string;
    phones?: Phones[];
    addresses?: Addresses[];
    notes?: Notes[];
    lastName?: string;
    name?: string;
    id?: string }
export interface LeadSource { commonModel?: string;
    sourceId?: string;
    sourceName?: string;
    details?: string }
export interface KeyValues { value?: string;
    key?: string;
    commonModel?: string }
export interface JsonSchema { commonModel?: string;
    description?: string;
    strict?: boolean;
    schema?: unknown;
    type?: JsonSchemaType;
    name?: string }
export interface JournalEntryLines { credit?: number;
    commonModel?: string;
    amount?: number;
    taxAmount?: number;
    description?: string;
    accountId?: string;
    debit?: number;
    tracking?: FinancialTrackingCategories;
    id?: string;
    taxCode?: string;
    quantity?: number }
export interface JournalEntries { id?: string;
    updatedAt?: string;
    reference?: string;
    isDeleted?: boolean;
    modifyToken?: string;
    createdAt?: string;
    currency?: Currency;
    entryNumber?: string;
    isActive?: boolean;
    date?: string;
    memo?: string;
    status?: JournalEntryStatus;
    createdBy?: string;
    isReconciled?: boolean;
    commonModel?: string;
    name?: string;
    totalAmount?: number;
    attachments?: Attachments[];
    type?: string;
    description?: string;
    exchangeRate?: number;
    lines?: JournalEntryLines[];
    updatedBy?: string }
export interface Jobs { baseSalary?: Salaries;
    location?: Addresses;
    jobTrainingProvided?: boolean;
    description?: string;
    employmentType?: EmploymentType;
    educationRequirements?: string;
    createdAt?: string;
    jobTrialPeriod?: string;
    workFromHome?: boolean;
    updatedAt?: string;
    languagesSpoken?: string[];
    remote?: boolean;
    applicationDeadline?: string;
    incentives?: string;
    occupationalCategory?: string;
    jobStartDate?: string;
    employmentUnit?: EmploymentUnits;
    incentiveCompensation?: string;
    company?: Companies;
    workHours?: string;
    skills?: string[];
    salaryCurrency?: string;
    title?: string;
    validUntil?: string;
    id?: string;
    experienceRequirements?: string;
    commonModel?: string;
    jobLocationType?: string;
    responsibilities?: string;
    modifyToken?: string;
    jobBenefits?: string;
    jobImmediateStart?: boolean;
    benefits?: string[];
    jobShifts?: string[];
    industry?: string;
    jobFlexibleHours?: boolean;
    qualifications?: string }
export interface Items { commonModel?: string;
    modifiers?: Modifiers[];
    discountedPrice?: number;
    weightUnit?: string;
    accountName?: string;
    createdAt?: string;
    linePrice?: number;
    tax?: number;
    description?: string;
    shippingId?: string;
    quantity?: number;
    discountLines?: Discounts[];
    requiresShipping?: boolean;
    id?: string;
    price?: number;
    originalPrice?: number;
    productId?: string;
    fulfillableQuantity?: number;
    updatedAt?: string;
    isActive?: boolean;
    sku?: string;
    title?: string;
    variantId?: string;
    taxLines?: TaxLines[];
    isDeleted?: boolean;
    accountId?: string;
    parentId?: string;
    image?: Images;
    weight?: number;
    currency?: Currency;
    discount?: number;
    variantTitle?: string;
    isTaxable?: boolean }
export interface Invoices { balanceDue?: number;
    reference?: Entity;
    issuedDate?: string;
    header?: string;
    subtotal?: number;
    invoicePayments?: InvoicePayments[];
    attachments?: Attachments[];
    discountPercentage?: number;
    invoiceNumber?: string;
    createdAt?: string;
    notes?: string;
    paymentTerms?: PaymentTerms;
    status?: PaymentStatus;
    currency?: Currency;
    modifyToken?: string;
    id?: string;
    billingAddress?: Addresses;
    updatedAt?: string;
    vatName?: string;
    customer?: Customers;
    terms?: string;
    total?: number;
    items?: InvoiceItems[];
    metadata?: Metadata[];
    shippingAddress?: Addresses;
    isDeleted?: boolean;
    paidAmount?: number;
    adjustments?: InvoiceAdjustments[];
    exchangeRate?: number;
    dueDate?: string;
    footer?: string;
    vatNumber?: string;
    transactionDate?: string;
    commonModel?: string;
    taxTotal?: number;
    discountTotal?: number;
    isActive?: boolean }
export interface InvoicePayments { amount?: number;
    commonModel?: string;
    modifyToken?: string;
    createdAt?: string;
    id?: string;
    date?: string;
    updatedAt?: string }
export interface InvoiceItems { condition?: ItemCondition;
    gallery?: Images[];
    isbn?: string;
    dimensions?: Dimensions;
    isActive?: boolean;
    currency?: Currency;
    upc?: string;
    options?: ProductOptions[];
    inventoryStatus?: ProductAvailabilityStatus;
    ean?: string;
    rating?: number;
    tags?: string[];
    availabilityDate?: string;
    inventoryQuantity?: number;
    onSale?: boolean;
    createdAt?: string;
    deletedAt?: string;
    weight?: number;
    isAvailable?: boolean;
    discount?: number;
    price?: number;
    sku?: string;
    mpn?: string;
    name?: string;
    quantity?: number;
    customFields?: CustomAttributes[];
    variants?: Variants[];
    description?: string;
    imageUrl?: string;
    updatedAt?: string;
    brand?: string;
    id?: string;
    commonModel?: string;
    reviews?: RatingsReviews[];
    ratingCount?: number;
    modifyToken?: string }
export interface InvoiceAdjustments { id?: string;
    updatedAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    amount?: number;
    createdAt?: string;
    description?: string;
    metadata?: Metadata;
    type?: InvoiceAdjustmentType;
    appliedToInvoiceItemId?: string;
    commonModel?: string;
    currency?: Currency }
export interface InventoryLocations { type?: InventoryStorageType;
    address?: Addresses;
    locationId?: string;
    quantity?: number;
    isActive?: boolean;
    updatedAt?: string;
    commonModel?: string;
    operationalHours?: string;
    isDeleted?: boolean;
    name?: string;
    contactInformation?: Contacts[];
    createdAt?: string }
export interface IncomeTaxExpenseDetails { currentIncomeTax?: number;
    taxAllowanceCredit?: number;
    commonModel?: string;
    deferredIncomeTax?: number }
export interface IncomeStatements { shareholderEquity?: ShareholderEquityDetails;
    period?: string;
    createdAt?: string;
    depreciationAndAmortization?: number;
    netIncome?: number;
    updatedAt?: string;
    modifyToken?: string;
    interestExpense?: number;
    accountSummary?: KeyValues[];
    incomeBeforeTax?: number;
    exchangeRate?: number;
    ebitda?: number;
    costOfGoodsSold?: number;
    id?: string;
    currency?: Currency;
    operatingExpenses?: OperatingExpensesDetails;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    commonModel?: string;
    revenue?: RevenueDetails;
    profitMargins?: number;
    grossProfit?: number;
    operatingIncome?: number }
export interface Images { isDeleted?: boolean;
    tags?: string[];
    updatedAt?: string;
    data?: string;
    title?: string;
    createdAt?: string;
    isActive?: boolean;
    type?: ImageType;
    height?: number;
    commonModel?: string;
    src?: string;
    width?: number;
    id?: string;
    mimeType?: ImageMimeType;
    altText?: string;
    thumbnailSrc?: string;
    caption?: string }
export interface HiringOrganizations { description?: string;
    size?: string;
    commonModel?: string;
    industry?: string;
    name?: string;
    locations?: Addresses[] }
export interface GiftCards { isActive?: boolean;
    cardNumber?: string;
    purchasedBy?: string;
    id?: string;
    amountUsed?: number;
    currency?: Currency;
    updatedAt?: string;
    createdAt?: string;
    issuedBy?: string;
    expirationDate?: string;
    isDeleted?: boolean;
    metadata?: string;
    commonModel?: string;
    status?: LifecycleStatus;
    balance?: number;
    associatedUser?: Users }
export interface GeoCoordinates { altitude?: number;
    heading?: number;
    commonModel?: string;
    longitude?: number;
    latitude?: number;
    altitudeAccuracy?: number;
    timestamp?: string;
    accuracy?: number;
    speed?: number }
export interface Fulfillments { fulfillmentItems?: FulfillmentItems[];
    commonModel?: string;
    currency?: Currency;
    expectedDelivery?: string;
    updatedAt?: string;
    orderId?: string;
    metadata?: Metadata;
    service?: string;
    carrier?: string;
    items?: Items[];
    notes?: string;
    address?: Addresses;
    receipt?: FulfillmentReceipts;
    totalPrice?: number;
    shipmentDate?: string;
    createdAt?: string;
    id?: string;
    trackingNumber?: string;
    trackingUrls?: string[];
    status?: FulfillmentStatus }
export interface FulfillmentReceipts { fulfillmentId?: string;
    testCase?: boolean;
    currency?: Currency;
    commonModel?: string;
    id?: string;
    status?: OrderStatus;
    updatedAt?: string;
    isActive?: boolean;
    transactionDetails?: TransactionDetails;
    isDeleted?: boolean;
    customer?: Customers;
    paymentMethod?: PaymentMethod;
    createdAt?: string;
    authorization?: string;
    amount?: number }
export interface FulfillmentItems { quantity?: number;
    title?: string;
    weight?: number;
    requiresShipping?: boolean;
    taxable?: boolean;
    updatedAt?: string;
    imageUrl?: string;
    fulfillmentId?: string;
    variantId?: string;
    isActive?: boolean;
    orderId?: string;
    dimensions?: Dimensions;
    isDeleted?: boolean;
    id?: string;
    commonModel?: string;
    price?: number;
    weightUnit?: string;
    customAttributes?: CustomAttributes;
    variantTitle?: string;
    productId?: string;
    sku?: string;
    description?: string;
    createdAt?: string;
    status?: OrderStatus }
export interface Folders { modifyToken?: string;
    createdAt?: string;
    isDownloadable?: boolean;
    owner?: FileOwners;
    name?: string;
    updatedAt?: string;
    parent?: ParentFolders;
    permissions?: Permissions;
    description?: string;
    path?: string;
    commonModel?: string;
    size?: number;
    id?: string }
export interface Files { modifyToken?: string;
    path?: string;
    mimeType?: string;
    downloadUrl?: string;
    commonModel?: string;
    name?: string;
    exportFormats?: string;
    description?: string;
    size?: number;
    content?: string;
    permissions?: Permissions;
    id?: string;
    extension?: string;
    updatedAt?: string;
    isExportable?: boolean;
    type?: FileType;
    isDownloadable?: boolean;
    parent?: ParentFolders;
    owner?: FileOwners;
    createdAt?: string }
export interface FileOwners { name?: string;
    createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    id?: string;
    email?: string }
export interface Expenses { amount?: number;
    id?: string;
    tax?: Taxes[];
    createdByUserId?: string;
    accountId?: string;
    reportId?: string;
    transactionId?: string;
    description?: string;
    paymentMethod?: PaymentMethods;
    items?: Items[];
    approvedByUserId?: string;
    customFields?: CustomAttributes[];
    tags?: string[];
    isDeleted?: boolean;
    createdAt?: string;
    modifyToken?: string;
    currency?: string;
    updatedAt?: string;
    receiptUrls?: string[];
    commonModel?: string;
    dateIncurred?: string;
    status?: ExpenseApprovalStatus;
    isActive?: boolean;
    merchant?: string;
    category?: ExpenseCategories;
    attachments?: Attachments[];
    note?: string;
    location?: Addresses }
export interface ExpenseCategories { id?: string;
    name?: string;
    description?: string;
    commonModel?: string }
export interface Evidence { shippingCarrier?: string;
    shippingDate?: string;
    customerSignature?: string;
    shippingAddress?: string;
    shippingDocumentation?: string;
    uncategorizedFile?: string;
    uncategorizedText?: string;
    cancellationPolicyDisclosure?: string;
    refundPolicy?: string;
    refundPolicyDisclosure?: string;
    serviceDate?: string;
    customerName?: string;
    receipt?: string;
    cancellationRebuttal?: string;
    customerPurchaseIp?: string;
    refundRefusalExplanation?: string;
    billingAddress?: string;
    shippingTrackingNumber?: string;
    duplicateChargeId?: string;
    cancellationPolicy?: string;
    commonModel?: string;
    customerCommunication?: string;
    accessActivityLog?: string;
    duplicateChargeDocumentation?: string;
    duplicateChargeExplanation?: string;
    customerEmailAddress?: string;
    productDescription?: string;
    serviceDocumentation?: string }
export interface Events { createdAt?: string;
    location?: string;
    id?: string;
    attendees?: Users[];
    reminders?: EventReminders[];
    attachments?: Attachments[];
    title?: string;
    updatedAt?: string;
    link?: string;
    organizer?: Users;
    modifyToken?: string;
    commonModel?: string;
    recurrence?: EventRecurrences;
    description?: string;
    timeZone?: string;
    status?: EventStatus;
    visibility?: EventVisibility;
    rules?: EventRules;
    entryPoints?: EntryPoints[];
    startDate?: string;
    endDate?: string;
    isDeleted?: boolean }
export interface EventRules { canAddSelf?: boolean;
    guestsCanInvite?: boolean;
    guestsCanModify?: boolean;
    isAllDay?: boolean;
    isMultiDay?: boolean;
    commonModel?: string;
    locked?: boolean }
export interface EventReminders { commonModel?: string;
    minutes?: number;
    action?: EventReminderAction }
export interface EventRecurrences { commonModel?: string;
    rules?: EventRecurrenceRules[];
    id?: string }
export interface EventRecurrenceRules { interval?: number;
    count?: number;
    byMonthDay?: number;
    byMonth?: number;
    dates?: string[];
    until?: string;
    type?: EventRuleType;
    commonModel?: string;
    byDay?: string;
    id?: string;
    frequency?: EventFrequency }
export interface EntryPoints { id?: string;
    uri?: string;
    pin?: string;
    commonModel?: string;
    type?: string;
    name?: string }
export interface Entity { entityId?: string;
    value?: string;
    attributes?: string[];
    commonModel?: string;
    entityType?: EntityCategory }
export interface EmploymentUnits { description?: string;
    name?: string;
    commonModel?: string }
export interface Emails { commonModel?: string;
    type?: EmailCategoryType;
    email?: string }
export interface Educations { gpa?: number;
    commonModel?: string;
    degree?: string;
    fieldOfStudy?: string;
    startDate?: string;
    endDate?: string;
    institution?: string }
export interface Drives { updatedAt?: string;
    id?: string;
    name?: string;
    createdAt?: string;
    description?: string;
    commonModel?: string }
export interface Drafts { type?: MessageContentType;
    replyToMessageId?: string;
    chatId?: string;
    reference?: Entity;
    senderId?: string;
    createdAt?: string;
    trackingSettings?: KeyValues[];
    subject?: string;
    cc?: string;
    receiverId?: string;
    templateId?: string;
    bcc?: string;
    attachments?: Attachments[];
    tags?: KeyValues[];
    messageId?: string;
    modifyToken?: string;
    updatedAt?: string;
    commonModel?: string;
    timestamp?: string;
    threadId?: string;
    metadata?: Metadata[];
    id?: string;
    content?: string;
    priority?: PriorityLevel;
    senderEmail?: string;
    recipientEmails?: string[] }
export interface Disputes { isDeleted?: boolean;
    amount?: number;
    chargeRefundable?: boolean;
    updated?: string;
    charge?: string;
    transactionId?: string;
    status?: FinancialDisputeStatus;
    metadata?: Metadata;
    customerId?: string;
    currency?: Currency;
    reason?: string;
    version?: string;
    id?: string;
    created?: string;
    commonModel?: string;
    evidence?: Evidence;
    notes?: string;
    isActive?: boolean }
export interface Discounts { type?: DiscountType;
    minimumPurchaseAmount?: number;
    createdAt?: string;
    title?: string;
    minimumQuantityOfItems?: number;
    customFields?: CustomAttributes[];
    commonModel?: string;
    code?: string;
    endDate?: string;
    description?: string;
    minimumRequirements?: MinimumRequirements;
    currency?: string;
    usageLimit?: number;
    isActive?: boolean;
    appliesTo?: AppliesTo;
    isDeleted?: boolean;
    usageLimitExpirations?: UsageLimitExpirations;
    customerEligibility?: CustomerEligibility;
    stackable?: boolean;
    status?: Status;
    id?: string;
    value?: number;
    usageLimitPerCustomer?: number;
    modifyToken?: string;
    channelAvailability?: ChannelAvailability;
    startDate?: string;
    exclusions?: string[];
    updatedAt?: string;
    timesUsed?: number }
export interface Dimensions { commonModel?: string;
    length?: number;
    width?: number;
    height?: number }
export interface Databases { createdAt?: string;
    updatedAt?: string;
    tablesExpiresIn?: string;
    modifyToken?: string;
    commonModel?: string;
    tables?: Tables[];
    title?: string;
    url?: string;
    projectId?: string;
    name?: string;
    description?: string;
    organizationId?: string;
    id?: string;
    permissionLevel?: string;
    type?: DatabaseType;
    isActive?: boolean;
    isDeleted?: boolean;
    region?: string }
export interface Customers { id?: string;
    companyName?: string;
    updatedAt?: string;
    modifyToken?: string;
    customerType?: CustomerType;
    defaultAddress?: Addresses;
    fullName?: string;
    preferredContactMethod?: CommunicationMethod;
    commonModel?: string;
    reference?: Entity;
    middleName?: string;
    loyaltyProgramMembership?: string;
    emails?: Emails[];
    dateOfBirth?: string;
    status?: CustomerStatus;
    firstName?: string;
    companyId?: string;
    customerSegment?: string;
    createdAt?: string;
    currency?: Currency;
    customFields?: CustomAttributes[];
    customerNumber?: string;
    email?: string;
    phones?: Phones[];
    addresses?: Addresses[];
    phoneNumber?: string;
    jobTitle?: string;
    notes?: string;
    lastName?: string;
    title?: string;
    tags?: string[];
    metadata?: string;
    socialProfiles?: SocialProfiles[];
    source?: string }
export interface CustomAttributes { fieldType?: DataType;
    id?: string;
    fieldName?: string;
    fieldValue?: string;
    commonModel?: string }
export interface CurrencyDetails { commonModel?: string;
    currency?: Currency;
    value?: number;
    id?: string }
export interface CreditNotes { updatedAt?: string;
    companyName?: string;
    isDeleted?: boolean;
    id?: string;
    modifyToken?: string;
    createdAt?: string;
    status?: CreditNoteStatus;
    reason?: string;
    vatNumber?: string;
    issuedDate?: string;
    description?: string;
    companyId?: string;
    number?: string;
    memo?: string;
    dueDate?: string;
    amount?: number;
    creditType?: CreditType;
    adjustment?: number;
    shippingAddress?: Addresses;
    lines?: CreditNoteLines[];
    billingAddress?: Addresses;
    metadata?: Metadata;
    taxAmount?: number;
    vatName?: string;
    isActive?: boolean;
    discounts?: number[];
    taxRate?: number;
    attachments?: Attachments[];
    customer?: Customers;
    commonModel?: string;
    currency?: Currency;
    payments?: Payments[] }
export interface CreditNoteLines { commonModel?: string;
    total?: number;
    product?: Products;
    quantity?: number;
    customFields?: CustomAttributes[];
    id?: string;
    description?: string;
    unitPrice?: number;
    taxRate?: number;
    account?: string }
export interface Conversations { title?: string;
    customFields?: CustomAttributes[];
    comments?: Comments[];
    id?: string;
    updatedAt?: string;
    lastMessage?: Messages;
    metadata?: string;
    type?: ChatType;
    isPinned?: boolean;
    commonModel?: string;
    participants?: Participants[];
    createdAt?: string;
    unreadCount?: number;
    messages?: Messages[];
    isRead?: boolean;
    lastReadMessageId?: string;
    modifyToken?: string;
    status?: ConversationStatus }
export interface Contacts { defaultPhoneNumber?: string;
    lastName?: string;
    userRoles?: UserRoles[];
    notes?: Notes;
    tags?: string[];
    defaultEmail?: string;
    websites?: string[];
    socialProfiles?: SocialProfiles[];
    relationship?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    leadId?: string;
    updatedAt?: string;
    id?: string;
    firstName?: string;
    modifyToken?: string;
    phones?: Phones[];
    isActive?: boolean;
    commonModel?: string;
    emails?: Emails[];
    companyName?: string;
    address?: Addresses;
    dateOfBirth?: string;
    note?: string;
    companyId?: string;
    code?: string;
    addresses?: Addresses[] }
export interface Companies { createdAt?: string;
    commonModel?: string;
    defaultEmail?: string;
    legalName?: string;
    modifyToken?: string;
    taxId?: string;
    address?: Addresses;
    revenueRange?: string;
    updatedAt?: string;
    numberOfEmployees?: number;
    additionalContacts?: Contacts[];
    reference?: Entity;
    numberOfEmployeesRange?: string;
    dunsNumber?: string;
    defaultPhoneNumber?: string;
    regulatoryStatus?: string;
    industry?: string;
    emails?: Emails[];
    tags?: string[];
    incorporationDate?: string;
    name?: string;
    socialProfiles?: SocialProfiles[];
    incorporationCountry?: string;
    customFields?: CustomAttributes[];
    domain?: string;
    parentCompanyId?: string;
    logo?: string;
    stockSymbol?: string;
    revenueCurrency?: string;
    phones?: Phones[];
    description?: string;
    id?: string;
    type?: string;
    website?: string;
    foundedDate?: string;
    revenue?: number;
    companyNumber?: string }
export interface Comments { likes?: number;
    metadata?: Metadata[];
    isDeleted?: boolean;
    isFlagged?: boolean;
    attachments?: Attachments[];
    commonModel?: string;
    updatedAt?: string;
    isActive?: boolean;
    author?: Users;
    parentId?: string;
    createdAt?: string;
    commentId?: string;
    text?: string }
export interface Chats { numberOfCompletions?: number;
    topK?: number;
    messages?: AiMessages[];
    toolChoice?: AiToolChoice;
    temperature?: number;
    commonModel?: string;
    id?: string;
    tools?: JsonSchema[];
    enableParallelToolCalls?: boolean;
    maxTokens?: number;
    systemMessage?: string;
    userId?: string;
    seed?: number;
    modifyToken?: string;
    presencePenalty?: number;
    systemFingerprint?: string;
    objectType?: string;
    model?: string;
    usage?: AiUsage;
    responseFormat?: ResponseFormat;
    topP?: number;
    stopSequences?: string[];
    logitBias?: unknown;
    createdAt?: string;
    frequencyPenalty?: number }
export interface Categories { id?: string;
    modifyToken?: string;
    createdAt?: string;
    parentId?: string;
    tags?: string[];
    image?: string;
    updatedAt?: string;
    name?: string;
    commonModel?: string }
export interface Carts { paymentDetails?: PaymentDetails;
    version?: string;
    createdAt?: string;
    state?: OrderStatus;
    discountCodes?: string[];
    buyerIdentity?: Customers;
    itemCount?: number;
    updatedAt?: string;
    messages?: string[];
    commonModel?: string;
    giftCards?: GiftCards[];
    token?: string;
    originalTotalPrice?: number;
    shippingDetails?: ShippingDetails;
    totalPrice?: number;
    currency?: Currency;
    id?: string;
    attributes?: string[];
    totalWeight?: number;
    promotions?: Promotions[];
    items?: Items[];
    note?: string }
export interface CardDetails { brand?: string;
    status?: string;
    prepaidType?: PrepaidType;
    fingerprint?: string;
    statementDescription?: string;
    modifyToken?: string;
    createdAt?: string;
    isDeleted?: boolean;
    entryMethod?: EntryMethod;
    isActive?: boolean;
    cvvStatus?: CvvStatus;
    expiryMonth?: string;
    authorizedAt?: string;
    updatedAt?: string;
    lastFour?: string;
    bin?: string;
    id?: string;
    expiryYear?: string;
    avcStatus?: AvcStatus;
    type?: CardType;
    capturedAt?: string;
    commonModel?: string }
export interface Candidates { languages?: string[];
    certifications?: string[];
    commonModel?: string;
    availability?: string;
    status?: EmploymentAndCandidateStatus;
    educations?: Educations[];
    role?: string;
    workExperiences?: WorkExperiences[];
    references?: References[];
    notes?: Notes[];
    socialProfiles?: SocialProfiles[];
    phoneNumber?: string;
    preferredWorkLocation?: string;
    resume?: Attachments;
    coverLetter?: Attachments;
    createdAt?: string;
    updatedAt?: string;
    lastName?: string;
    websites?: string[];
    customFields?: CustomAttributes[];
    skills?: string[];
    modifyToken?: string;
    jobId?: string;
    id?: string;
    email?: string;
    profilePicture?: Images;
    firstName?: string }
export interface Campaigns { endDate?: string;
    targetAudience?: string;
    type?: CampaignType;
    creativeAssets?: Attachments;
    isActive?: boolean;
    status?: CampaignStatus;
    channels?: string[];
    createdAt?: string;
    budget?: number;
    performanceMetrics?: PerformanceMetrics;
    commonModel?: string;
    id?: string;
    startDate?: string;
    tags?: string[];
    updatedAt?: string;
    name?: string;
    isDeleted?: boolean }
export interface Calendars { updatedAt?: string;
    description?: string;
    id?: string;
    modifyToken?: string;
    location?: string;
    title?: string;
    createdAt?: string;
    isDeleted?: boolean;
    timeZone?: string;
    type?: string;
    commonModel?: string }
export interface CRMAccounts { customFields?: CustomAttributes[];
    industry?: string;
    rating?: AccountEngagementLevel;
    name?: string;
    billingAddress?: Addresses;
    createdAt?: string;
    commonModel?: string;
    accountType?: StakeholderType;
    numberOfEmployees?: number;
    tags?: string[];
    website?: string;
    annualRevenue?: number;
    email?: string;
    phone?: string;
    ownerId?: string;
    updatedAt?: string;
    status?: AccountStatus;
    shippingAddress?: Addresses;
    id?: string }
export interface BusinessHours { sessions?: TimeSession[];
    isActive?: boolean;
    isDeleted?: boolean;
    dayOfWeek?: DayOfWeek;
    closed?: boolean;
    id?: string;
    storeID?: string;
    timeZone?: string;
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Brands { id?: string;
    established?: string;
    commonModel?: string;
    status?: ItemEntityStatus;
    createdAt?: string;
    updatedAt?: string;
    name?: string;
    description?: string;
    logo?: string;
    country?: string;
    website?: string;
    customFields?: CustomAttributes[] }
export interface Bills { attachments?: Attachments[];
    id?: string;
    amountDue?: number;
    modifyToken?: string;
    amountPaid?: number;
    currency?: string;
    amountRemaining?: number;
    commonModel?: string;
    notes?: string;
    issueDate?: string;
    status?: BillingStatus;
    isActive?: boolean;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    invoiceNumber?: string;
    terms?: string;
    dueDate?: string;
    vendor?: Vendors;
    isDeleted?: boolean;
    createdAt?: string;
    customer?: Customers;
    items?: Items[] }
export interface BillingDetails { isActive?: boolean;
    additionalAttributes?: CustomAttributes[];
    id?: string;
    paymentTerms?: PaymentTerm;
    commonModel?: string;
    companyName?: string;
    phoneNumber?: string;
    createdAt?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    fullName?: string;
    language?: string;
    customerId?: string;
    note?: string;
    currency?: Currency;
    email?: string;
    vatId?: string;
    address?: Addresses;
    defaultPaymentMethod?: PaymentMethods }
export interface BalanceSheets { longTermDebt?: number;
    commonStock?: number;
    auditInfo?: AuditInformation;
    isDeleted?: boolean;
    preferredStock?: number;
    currentLiabilities?: number;
    currency?: Currency;
    accountsPayable?: number;
    deferredRevenue?: number;
    otherNonCurrentAssets?: number;
    id?: string;
    equity?: number;
    balanceDate?: string;
    inventory?: number;
    shortTermInvestments?: number;
    intangibleAssets?: number;
    stockholdersEquity?: number;
    otherCurrentLiabilities?: number;
    notes?: string;
    totalLiabilitiesAndEquity?: number;
    customFields?: CustomAttributes[];
    nonCurrentLiabilities?: number;
    totalAssets?: number;
    currentPortionOfLongTermDebt?: number;
    commonModel?: string;
    fixedAssets?: number;
    otherCurrentAssets?: number;
    cashAndCashEquivalents?: number;
    additionalPaidInCapital?: number;
    totalLiabilities?: number;
    currentAssets?: number;
    createdAt?: string;
    isActive?: boolean;
    shortTermDebt?: number;
    modifyToken?: string;
    propertyPlantEquipment?: number;
    accumulatedDepreciation?: number;
    retainedEarnings?: number;
    updatedAt?: string;
    taxLiabilities?: number;
    accountsReceivable?: number;
    treasuryStock?: number;
    minorityInterest?: number;
    accountSummary?: KeyValues[];
    notesPayable?: number;
    accruedLiabilities?: number;
    otherNonCurrentLiabilities?: number;
    nonCurrentAssets?: number;
    prepaidExpenses?: number }
export interface AuditInformation { auditorName?: string;
    notes?: string;
    commonModel?: string;
    auditOpinion?: AuditOpinionType;
    auditDate?: string }
export interface Attributes { id?: string;
    description?: string;
    dataType?: DataType;
    name?: string;
    slug?: string;
    isRequired?: boolean;
    isRepeated?: boolean;
    isNullable?: boolean;
    isUnique?: boolean;
    customTypeDetails?: Metadata[];
    createdAt?: string;
    commonModel?: string;
    modifyToken?: string;
    updatedAt?: string }
export interface Attachments { updatedAt?: string;
    permissions?: Permissions;
    fileType?: string;
    previewUrl?: string;
    content?: string;
    fileSize?: number;
    thumbnailUrl?: string;
    commonModel?: string;
    fileName?: string;
    metadata?: Metadata;
    createdAt?: string;
    id?: string;
    url?: string;
    associatedWith?: Entity }
export interface AiUsage { commonModel?: string;
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number }
export interface AiToolChoice { name?: string;
    type?: AiToolChoiceType;
    commonModel?: string }
export interface AiMessagesContent { toolResultContent?: ToolResultContent[];
    modifyToken?: string;
    isError?: boolean;
    commonModel?: string;
    image?: Images;
    id?: string;
    toolUseId?: string;
    text?: string;
    type?: AiMessagesContentType;
    name?: string }
export interface AiMessages { content?: AiMessagesContent[];
    role?: AiRole;
    name?: string;
    index?: number;
    commonModel?: string;
    finishReason?: string;
    toolCalls?: ToolCalls[];
    refusal?: string }
export interface Addresses { firstName?: string;
    country?: string;
    subdivisionCode?: string;
    addressLine2?: string;
    geoLocation?: GeoCoordinates;
    contactId?: string;
    id?: string;
    postalCode?: string;
    accountId?: string;
    commonModel?: string;
    email?: string;
    lastName?: string;
    middleName?: string;
    phoneNumber?: string;
    region?: string;
    street?: string;
    postalCodeExtension?: string;
    city?: string;
    countryCode?: string;
    type?: ContactAddressType;
    companyName?: string;
    name?: string;
    province?: string;
    customFields?: CustomAttributes[] }
export interface AdditionalCharges { commonModel?: string;
    description?: string;
    amount?: number;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    type?: FinancialChargeType }
export interface Accounts { overdraftLimit?: number;
    title?: string;
    owner?: Customers;
    status?: FinancialAccountStatus;
    taxType?: string;
    commonModel?: string;
    accountCode?: string;
    allowPayments?: boolean;
    showInExpenses?: boolean;
    id?: string;
    accountType?: AccountType;
    createdAt?: string;
    updatedAt?: string;
    overdraftProtection?: boolean;
    isDeleted?: boolean;
    modifyToken?: string;
    transactions?: Transactions[];
    balance?: number;
    isActive?: boolean;
    description?: string;
    name?: string;
    accountNumber?: string;
    currency?: Currency;
    branch?: string;
    interestRate?: number;
    closedAt?: string;
    notes?: string }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Mobile = 'mobile', Atm = 'atm', Mail = 'mail', Online = 'online', Telephone = 'telephone' }
export const enum ChannelAvailability { AllChannels = 'all-channels', InApp = 'in-app', InStore = 'in-store', Online = 'online' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum ReceiverRoles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum Gender { PreferNotToSay = 'prefer not to say', Female = 'female', Other = 'other', Male = 'male' }
export const enum AccountType { AssetTrustAccounts = 'asset::trust-accounts', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetOtherLongTermAssets = 'asset::other-long-term-assets', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', Equity = 'equity', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseDepreciation = 'other-expense::depreciation', LiabilityCreditCard = 'liability::credit-card', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityTreasuryStock = 'equity::treasury-stock', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetUndepositedFunds = 'asset::undeposited-funds', AssetLand = 'asset::land', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', EquityFunds = 'equity::funds', EquityCapitalReserves = 'equity::capital-reserves', EquityHealthcare = 'equity::healthcare', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseSundry = 'expense::sundry', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetDevelopmentCosts = 'asset::development-costs', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', LiabilityLongTermLiability = 'liability::long-term-liability', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseManagementCompensation = 'expense::management-compensation', AssetLandAsset = 'asset::land-asset', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', RevenueSalesRetail = 'revenue::sales-retail', AssetInventory = 'asset::inventory', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseTaxesPaid = 'expense::taxes-paid', AssetLongTermInvestments = 'asset::long-term-investments', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseInterestPaid = 'expense::interest-paid', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseFinanceCosts = 'expense::finance-costs', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetLoansToOthers = 'asset::loans-to-others', RevenueServiceFeeIncome = 'revenue::service-fee-income', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseUtilities = 'expense::utilities', Expense = 'expense', OtherIncomeDividendIncome = 'other-income::dividend-income', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetSavings = 'asset::savings', EquityInvestmentGrants = 'equity::investment-grants', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetBank = 'asset::bank', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetLicenses = 'asset::licenses', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetOtherAsset = 'asset::other-asset', EquityPersonalIncome = 'equity::personal-income', ExpenseAuto = 'expense::auto', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherIncome = 'other-income', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AccountsReceivable = 'accounts-receivable', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetDeferredTax = 'asset::deferred-tax', LiabilityBankLoans = 'liability::bank-loans', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherExpenseUtilities = 'other-expense::utilities', ExpenseEquipmentRental = 'expense::equipment-rental', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', Asset = 'asset', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetRetainage = 'asset::retainage', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetCapitalWip = 'asset::capital-wip', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetInvestments = 'asset::investments', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseExternalServices = 'expense::external-services', OtherExpense = 'other-expense', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetParticipatingInterests = 'asset::participating-interests', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetFixedAsset = 'asset::fixed-asset', EquityOwnersEquity = 'equity::owners-equity', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetSecurityDeposits = 'asset::security-deposits', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', RevenueRevenueGeneral = 'revenue::revenue-general', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', Income = 'income', EquityPersonalExpense = 'equity::personal-expense', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseVehicle = 'other-expense::vehicle', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseOtherExternalServices = 'expense::other-external-services', OtherExpenseAmortization = 'other-expense::amortization', AssetDepletableAssets = 'asset::depletable-assets', AssetCashOnHand = 'asset::cash-on-hand', ExpenseInsurance = 'expense::insurance', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', CostOfGoodsSold = 'cost-of-goods-sold', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetGoodwill = 'asset::goodwill', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetOtherConsumables = 'asset::other-consumables', AssetIntangibleAssets = 'asset::intangible-assets', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityPartnersEquity = 'equity::partners-equity', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherExpenseMatCredit = 'other-expense::mat-credit', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', EquityShareCapital = 'equity::share-capital', ExpenseTravelMeals = 'expense::travel-meals', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiability = 'other-current-liability', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetInternalTransfers = 'asset::internal-transfers', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityDividendDisbursed = 'equity::dividend-disbursed', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetLeaseBuyout = 'asset::lease-buyout', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityCommonStock = 'equity::common-stock', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetBuildings = 'asset::buildings', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueIncome = 'revenue::income', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetChecking = 'asset::checking', AssetVehicles = 'asset::vehicles', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', EquityPartnerContributions = 'equity::partner-contributions', ExpensePurchasesRebates = 'expense::purchases-rebates', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseStaffCosts = 'expense::staff-costs', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseDepletion = 'other-expense::depletion', ExpenseTravel = 'expense::travel', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseBankCharges = 'expense::bank-charges', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', LiabilityNotesPayable = 'liability::notes-payable', Liability = 'liability', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetInvestmentOther = 'asset::investment-other', ExpenseRepairMaintenance = 'expense::repair-maintenance', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetLoansToStockholders = 'asset::loans-to-stockholders', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', SpecificItems = 'specific-items', AllItems = 'all-items' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum CustomerEligibility { All = 'all', SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers' }
export const enum Status { Expired = 'expired', Active = 'active', Scheduled = 'scheduled' }
export const enum UserRoles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum Roles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum VisibilityScope { Web = 'web', Global = 'global', App = 'app', Internal = 'internal', Private = 'private' }
export const enum UserStatus { Verified = 'verified', Pending = 'pending', WaitListed = 'wait-listed', Deleted = 'deleted', Active = 'active', Banned = 'banned', Archived = 'archived', Suspended = 'suspended', Inactive = 'inactive' }
export const enum UniversalIdentifierType { String = 'string', Number = 'number', Email = 'email', Uuid = 'uuid', Url = 'url' }
export const enum TransactionType { Adjustment = 'adjustment', Payment = 'payment', Charge = 'charge', Deposit = 'deposit', Refund = 'refund', Fee = 'fee', Transfer = 'transfer', Withdrawal = 'withdrawal' }
export const enum TransactionStatus { Cancelled = 'cancelled', Initiated = 'initiated', Error = 'error', Pending = 'pending', InProgress = 'in-progress', Succeeded = 'succeeded', Failed = 'failed' }
export const enum TransactionChannel { Mail = 'mail', InPerson = 'in-person', Online = 'online', Other = 'other', BankBranch = 'bank-branch', Telephone = 'telephone', Atm = 'atm', Mobile = 'mobile' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { Annually = 'annually', Minutely = 'minutely', SemiMonthly = 'semi-monthly', Custom = 'custom', Secondly = 'secondly', Hourly = 'hourly', SemiAnnually = 'semi-annually', Quarterly = 'quarterly', Daily = 'daily', Biweekly = 'biweekly', Biennially = 'biennially', Triennially = 'triennially', AdHoc = 'ad-hoc', Weekly = 'weekly', Monthly = 'monthly' }
export const enum TaxType { Additive = 'additive', Variable = 'variable', Inclusive = 'inclusive' }
export const enum TaskStatus { Todo = 'todo', Cancelled = 'cancelled', Done = 'done', Blocked = 'blocked', OnHold = 'on-hold', InProgress = 'in-progress' }
export const enum TableType { View = 'view', External = 'external', MaterializedView = 'materialized-view', Snapshot = 'snapshot', Table = 'table' }
export const enum SupportTicketPriority { High = 'high', Low = 'low', Medium = 'medium', Urgent = 'urgent', Immediate = 'immediate' }
export const enum SupportQueryType { Problem = 'problem', FeatureRequest = 'feature-request', Feedback = 'feedback', Bug = 'bug', Incident = 'incident', Question = 'question', Task = 'task' }
export const enum StakeholderType { Investor = 'investor', Vendor = 'vendor', Competitor = 'competitor', Partner = 'partner', Other = 'other', Customer = 'customer' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum SocialPlatform { Facebook = 'facebook', Youtube = 'youtube', Tumblr = 'tumblr', Reddit = 'reddit', Skype = 'skype', OtherSocialPlatform = 'other-social-platform', Snapchat = 'snapchat', Linkedin = 'linkedin', Instagram = 'instagram', Twitter = 'twitter', X = 'x', Tiktok = 'tiktok', Pinterest = 'pinterest' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Rejected = 'rejected', Revised = 'revised', Approved = 'approved', Pending = 'pending' }
export const enum ResponseFormatType { JsonObject = 'json-object', Text = 'text', JsonSchema = 'json-schema' }
export const enum ReactionType { Laugh = 'laugh', Like = 'like', Love = 'love', Bookmark = 'bookmark', Wow = 'wow', Interested = 'interested', Dislike = 'dislike', Sad = 'sad', Angry = 'angry' }
export const enum PromotionType { BuyOneGetOne = 'buy-one-get-one', Percentage = 'percentage', FixedAmount = 'fixed-amount', Other = 'other', RewardPoints = 'reward-points', FreeShipping = 'free-shipping' }
export const enum ProductAvailabilityStatus { BackOrder = 'back-order', PreOrder = 'pre-order', OutOfStock = 'out-of-stock', Discontinued = 'discontinued', InStock = 'in-stock' }
export const enum PriorityLevel { Low = 'low', Medium = 'medium', Elevated = 'elevated', High = 'high', Urgent = 'urgent' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Subtotal = 'subtotal', Quantity = 'quantity' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum PaymentTerm { Net60 = 'net-60', Prepayment = 'prepayment', Installment = 'installment', CashWithOrder = 'cash-with-order', DueOnReceipt = 'due-on-receipt', DueEndOfMonth = 'due-end-of-month', Net30 = 'net-30', Net = 'net', CashOnDelivery = 'cash-on-delivery', Prepaid = 'prepaid', Net90 = 'net-90', Custom = 'custom', DeferredPayment = 'deferred-payment', CashBeforeShipment = 'cash-before-shipment', UponCompletion = 'upon-completion', CashInAdvance = 'cash-in-advance' }
export const enum PaymentStatus { Partial = 'partial', Submitted = 'submitted', Overdue = 'overdue', Paid = 'paid', Error = 'error', Pending = 'pending', Voided = 'voided', Processing = 'processing', Succeeded = 'succeeded', Cancelled = 'cancelled', Draft = 'draft', Authorized = 'authorized', Refunded = 'refunded', Deleted = 'deleted', Failed = 'failed', Disputed = 'disputed', PartiallyRefunded = 'partially-refunded', Adjusted = 'adjusted' }
export const enum PaymentMethod { CashOnDelivery = 'cash-on-delivery', CreditCard = 'credit-card', Check = 'check', BankTransfer = 'bank-transfer', MobileWallet = 'mobile-wallet', Other = 'other', Paypal = 'paypal', Cash = 'cash', Cryptocurrency = 'cryptocurrency', DebitCard = 'debit-card', MobilePayment = 'mobile-payment' }
export const enum ParticipantType { Organization = 'organization', Group = 'group', Team = 'team', ExternalParticipant = 'external-participant', User = 'user' }
export const enum ParticipantEngagementStatus { Admin = 'admin', Moderator = 'moderator', Active = 'active', Left = 'left', Guest = 'guest', Banned = 'banned', Inactive = 'inactive' }
export const enum OrganizationalRole { Director = 'director', Employee = 'employee', Manager = 'manager', Supervisor = 'supervisor', Contractor = 'contractor', Admin = 'admin', Other = 'other' }
export const enum OrderingCriteria { Alphabetical = 'alphabetical', Relevance = 'relevance', Manual = 'manual', Popularity = 'popularity', PriceDescending = 'price-descending', Rating = 'rating', CreationDate = 'creation-date', PriceAscending = 'price-ascending' }
export const enum OrderStatus { Pending = 'pending', Refunded = 'refunded', Confirmed = 'confirmed', AwaitingPickup = 'awaiting-pickup', Failed = 'failed', AwaitingShipment = 'awaiting-shipment', AwaitingPayment = 'awaiting-payment', Returned = 'returned', Delivered = 'delivered', Disputed = 'disputed', Abandoned = 'abandoned', Processing = 'processing', OnHold = 'on-hold', Shipped = 'shipped', Completed = 'completed', Cancelled = 'cancelled', Draft = 'draft', PartiallyFulfilled = 'partially-fulfilled' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum MimeType { ImageGif = 'image/gif', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg' }
export const enum MessageReadStatus { Sent = 'sent', Unsent = 'unsent', Delivered = 'delivered', Read = 'read', Failed = 'failed' }
export const enum MessageDeliveryStatus { Delivered = 'delivered', Error = 'error', Read = 'read', Sent = 'sent', Failed = 'failed', Pending = 'pending', Undeliverable = 'undeliverable' }
export const enum MessageContentType { Gif = 'gif', File = 'file', Link = 'link', Voice = 'voice', Html = 'html', Sticker = 'sticker', Location = 'location', Image = 'image', Video = 'video', Text = 'text', Contact = 'contact', Audio = 'audio', Document = 'document' }
export const enum LifecycleStatus { Redeemed = 'redeemed', Issued = 'issued', Suspended = 'suspended', Expired = 'expired', Cancelled = 'cancelled', Active = 'active' }
export const enum LeadLifecycleStatus { BadTiming = 'bad-timing', Connected = 'connected', InProcess = 'in-process', Open = 'open', Converted = 'converted', AttemptedToContact = 'attempted-to-contact', Unqualified = 'unqualified', Revisited = 'revisited', New = 'new', Lost = 'lost' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Pending = 'pending', Error = 'error', Voided = 'voided', Corrected = 'corrected', Posted = 'posted', Draft = 'draft' }
export const enum ItemEntityStatus { Archived = 'archived', Pending = 'pending', Inactive = 'inactive', Deleted = 'deleted', Active = 'active', Suspended = 'suspended', Completed = 'completed' }
export const enum ItemCondition { Damaged = 'damaged', Refurbished = 'refurbished', New = 'new', LikeNew = 'like-new', OpenBox = 'open-box', Used = 'used' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', Active = 'active', Inactive = 'inactive', OutOfStock = 'out-of-stock' }
export const enum IssueLifecycleStatus { Resolved = 'resolved', Pending = 'pending', OnHold = 'on-hold', Closed = 'closed', InProgress = 'in-progress', Open = 'open', Waiting = 'waiting', Cancelled = 'cancelled' }
export const enum InvoiceAdjustmentType { Other = 'other', Discount = 'discount', Shipping = 'shipping', Tax = 'tax', Tip = 'tip' }
export const enum InventoryStorageType { DistributionCenter = 'distribution-center', Consignment = 'consignment', Other = 'other', RetailStore = 'retail-store', Warehouse = 'warehouse', DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImagePng = 'image/png', ImageTiff = 'image/tiff', ImageHeic = 'image/heic', ImageBmp = 'image/bmp', ImageGif = 'image/gif' }
export const enum IdentityProvider { Facebook = 'facebook', Telegram = 'telegram', Apple = 'apple', Dribbble = 'dribbble', Instagram = 'instagram', Behance = 'behance', Slack = 'slack', Amazon = 'amazon', Discord = 'discord', Signal = 'signal', Wechat = 'wechat', Github = 'github', Foursquare = 'foursquare', Reddit = 'reddit', Other = 'other', Twitter = 'twitter', Pinterest = 'pinterest', Line = 'line', Qq = 'qq', Flickr = 'flickr', Microsoft = 'microsoft', Whatsapp = 'whatsapp', Tumblr = 'tumblr', Snapchat = 'snapchat', Tiktok = 'tiktok', Google = 'google', Linkedin = 'linkedin', Yahoo = 'yahoo', Paypal = 'paypal', Vimeo = 'vimeo' }
export const enum GlobalTaxType { Vat = 'vat', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', Gst = 'gst', SalesTax = 'sales-tax', Other = 'other', ExciseTax = 'excise-tax' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Female = 'female', Other = 'other', Male = 'male' }
export const enum FulfillmentStatus { Delivered = 'delivered', Failure = 'failure', Returned = 'returned', InTransit = 'in-transit', Cancelled = 'cancelled', Pending = 'pending' }
export const enum FinancialTransactionType { Chargeback = 'chargeback', Interest = 'interest', Spend = 'spend', SpendPrepayment = 'spend-prepayment', ReceivePrepayment = 'receive-prepayment', Payment = 'payment', Withdrawal = 'withdrawal', Fee = 'fee', Charge = 'charge', ReceiveOverpayment = 'receive-overpayment', Transfer = 'transfer', Dividend = 'dividend', Refund = 'refund', Receive = 'receive', Other = 'other', Deposit = 'deposit', SpendOverpayment = 'spend-overpayment', Adjustment = 'adjustment', Sale = 'sale' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', Failed = 'failed', Cleared = 'cleared', Refunded = 'refunded', SettlementInProgress = 'settlement-in-progress', Authorized = 'authorized', Disputed = 'disputed', Pending = 'pending' }
export const enum FinancialTrackingCategories { CostCenter = 'cost-center', Vendor = 'vendor', Employee = 'employee', Customer = 'customer', Product = 'product', Service = 'service', Other = 'other', Location = 'location', Class = 'class', Division = 'division', Department = 'department', Project = 'project', None = 'none' }
export const enum FinancialDisputeStatus { UnderReview = 'under-review', AwaitingEvidence = 'awaiting-evidence', Escalated = 'escalated', NeedsResponse = 'needs-response', Closed = 'closed', Won = 'won', Lost = 'lost', ChargeRefunded = 'charge-refunded' }
export const enum FinancialChargeType { Commission = 'commission', Other = 'other', TransactionFee = 'transaction-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', LateFee = 'late-fee', ServiceCharge = 'service-charge' }
export const enum FinancialAccountStatus { Delinquent = 'delinquent', Closed = 'closed', UnderReview = 'under-review', Frozen = 'frozen', Suspended = 'suspended', Inactive = 'inactive', Active = 'active' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
export const enum ExpenseApprovalStatus { Cancelled = 'cancelled', New = 'new', Pending = 'pending', Reviewing = 'reviewing', Processed = 'processed', Denied = 'denied', Approved = 'approved', Reimbursed = 'reimbursed' }
export const enum EventVisibility { Private = 'private', Confidential = 'confidential', Public = 'public' }
export const enum EventStatus { Cancelled = 'cancelled', Tentative = 'tentative', Confirmed = 'confirmed' }
export const enum EventRuleType { AddDates = 'add-dates', ExcludeDates = 'exclude-dates', Repeat = 'repeat', Exclude = 'exclude' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventFrequency { Daily = 'daily', Weekly = 'weekly', Monthly = 'monthly', Yearly = 'yearly' }
export const enum EntryMethod { Keyed = 'keyed', Swiped = 'swiped', Contactless = 'contactless', Emv = 'emv', OnFile = 'on-file' }
export const enum EntityLifecycleStatus { Preorder = 'preorder', Inactive = 'inactive', Draft = 'draft', Active = 'active', Archived = 'archived', Deleted = 'deleted', Scheduled = 'scheduled' }
export const enum EntityCategory { User = 'user', Document = 'document', Owner = 'owner', Message = 'message', Event = 'event', Project = 'project', Task = 'task', Person = 'person', Other = 'other', Link = 'link' }
export const enum EmploymentType { Internship = 'internship', Seasonal = 'seasonal', Temporary = 'temporary', Freelance = 'freelance', Permanent = 'permanent', Volunteer = 'volunteer', FullTime = 'full-time', Contract = 'contract', PartTime = 'part-time' }
export const enum EmploymentAndCandidateStatus { Hired = 'hired', Interviewing = 'interviewing', New = 'new', Terminated = 'terminated', NotSelected = 'not-selected', InReview = 'in-review', Inactive = 'inactive', Active = 'active', OnLeave = 'on-leave', Other = 'other', OfferExtended = 'offer-extended' }
export const enum EmailCategoryType { Other = 'other', Business = 'business', Educational = 'educational', Governmental = 'governmental', Spam = 'spam', Promotional = 'promotional', Transactional = 'transactional', Personal = 'personal' }
export const enum DiscountType { TieredDiscount = 'tiered-discount', UnknownDiscount = 'unknown-discount', Percentage = 'percentage', ConditionalDiscount = 'conditional-discount', VariablePercentage = 'variable-percentage', FixedAmount = 'fixed-amount', VariableAmount = 'variable-amount', BuyOneGetOne = 'buy-one-get-one' }
export const enum DeviceUsageType { Business = 'business', Educational = 'educational', Industrial = 'industrial', Healthcare = 'healthcare', Other = 'other', Home = 'home', Personal = 'personal' }
export const enum DayOfWeek { Thursday = 'thursday', Sunday = 'sunday', Saturday = 'saturday', Monday = 'monday', Tuesday = 'tuesday', Wednesday = 'wednesday', Friday = 'friday' }
export const enum DatabaseType { Public = 'public', Default = 'default', External = 'external', Linked = 'linked' }
export const enum DataType { Json = 'json', Boolean = 'boolean', Binary = 'binary', Number = 'number', Array = 'array', String = 'string', Date = 'date', Object = 'object', Null = 'null', Undefined = 'undefined', Timestamp = 'timestamp', Custom = 'custom' }
export const enum CvvStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CustomerType { B2c = 'b2c', Online = 'online', Retail = 'retail', Wholesale = 'wholesale', B2b = 'b2b', Corporate = 'corporate' }
export const enum CustomerStatus { Active = 'active', Inactive = 'inactive', Pending = 'pending', Archived = 'archived', Suspended = 'suspended' }
export const enum CustomerEligibilityStatus { ReturningCustomers = 'returning-customers', Other = 'other', AllCustomers = 'all-customers', SpecificConditions = 'specific-conditions', NewCustomers = 'new-customers', VipCustomers = 'vip-customers' }
export const enum Currency { MRU = 'mru', YER = 'yer', LRD = 'lrd', SLL = 'sll', GMD = 'gmd', UAH = 'uah', TOP = 'top', MGA = 'mga', VUV = 'vuv', NOK = 'nok', MXN = 'mxn', UGX = 'ugx', FOK = 'fok', SBD = 'sbd', RSD = 'rsd', SSP = 'ssp', BHD = 'bhd', BOB = 'bob', CZK = 'czk', VES = 'ves', XAF = 'xaf', FKP = 'fkp', SZL = 'szl', BAM = 'bam', GTQ = 'gtq', AFN = 'afn', KHR = 'khr', GYD = 'gyd', SEK = 'sek', TRY = 'try', SHP = 'shp', JPY = 'jpy', PKR = 'pkr', MZN = 'mzn', SGD = 'sgd', GIP = 'gip', RWF = 'rwf', GGP = 'ggp', JOD = 'jod', KZT = 'kzt', MNT = 'mnt', INR = 'inr', XOF = 'xof', NPR = 'npr', THB = 'thb', SAR = 'sar', DZD = 'dzd', TJS = 'tjs', GEL = 'gel', KID = 'kid', LAK = 'lak', PYG = 'pyg', AMD = 'amd', AZN = 'azn', BYN = 'byn', CUP = 'cup', EGP = 'egp', KRW = 'krw', XCD = 'xcd', AUD = 'aud', HRK = 'hrk', HTG = 'htg', VND = 'vnd', BND = 'bnd', KWD = 'kwd', USD = 'usd', IDR = 'idr', WST = 'wst', TWD = 'twd', MDL = 'mdl', BIF = 'bif', TTD = 'ttd', SYP = 'syp', UYU = 'uyu', QAR = 'qar', SCR = 'scr', IQD = 'iqd', PGK = 'pgk', CNY = 'cny', RON = 'ron', STN = 'stn', ETB = 'etb', FJD = 'fjd', HUF = 'huf', MWK = 'mwk', KGS = 'kgs', KYD = 'kyd', LKR = 'lkr', BZD = 'bzd', HNL = 'hnl', BGN = 'bgn', JMD = 'jmd', PAB = 'pab', PEN = 'pen', UZS = 'uzs', KES = 'kes', GNF = 'gnf', BTN = 'btn', GBP = 'gbp', PHP = 'php', MOP = 'mop', BBD = 'bbd', ARS = 'ars', CUC = 'cuc', JEP = 'jep', LBP = 'lbp', DOP = 'dop', IMP = 'imp', NGN = 'ngn', NAD = 'nad', KMF = 'kmf', NIO = 'nio', TND = 'tnd', ANG = 'ang', AOA = 'aoa', CHF = 'chf', TVD = 'tvd', TZS = 'tzs', BMD = 'bmd', CAD = 'cad', CVE = 'cve', MMK = 'mmk', LYD = 'lyd', ZAR = 'zar', ZMW = 'zmw', BSD = 'bsd', ALL = 'all', COP = 'cop', CLP = 'clp', CRC = 'crc', CDF = 'cdf', EUR = 'eur', ILS = 'ils', IRR = 'irr', MKD = 'mkd', SDG = 'sdg', SOS = 'sos', PLN = 'pln', BDT = 'bdt', SRD = 'srd', AWG = 'awg', DKK = 'dkk', OMR = 'omr', BRL = 'brl', XDR = 'xdr', ISK = 'isk', RUB = 'rub', TMT = 'tmt', MVR = 'mvr', MYR = 'myr', LSL = 'lsl', KPW = 'kpw', BWP = 'bwp', NZD = 'nzd', DJF = 'djf', HKD = 'hkd', GHS = 'ghs', MUR = 'mur', AED = 'aed', ERN = 'ern', MAD = 'mad', ZWL = 'zwl', XPF = 'xpf' }
export const enum CreditType { Supplier = 'supplier', Customer = 'customer', Goodwill = 'goodwill', Overpayment = 'overpayment', Prepayment = 'prepayment' }
export const enum CreditNoteStatus { Draft = 'draft', Completed = 'completed', Issued = 'issued', Void = 'void', Pending = 'pending', Disputed = 'disputed', Cancelled = 'cancelled', Revised = 'revised', Applied = 'applied' }
export const enum Country { Ethiopia = 'ethiopia', CongoDemocraticRepublic = 'congo-democratic-republic', Denmark = 'denmark', Italy = 'italy', SouthAfrica = 'south-africa', Eswatini = 'eswatini', UnitedStates = 'united-states', Micronesia = 'micronesia', Vanuatu = 'vanuatu', Malaysia = 'malaysia', Netherlands = 'netherlands', Kuwait = 'kuwait', Venezuela = 'venezuela', EquatorialGuinea = 'equatorial-guinea', Bahrain = 'bahrain', Estonia = 'estonia', Indonesia = 'indonesia', Benin = 'benin', Israel = 'israel', Lebanon = 'lebanon', Philippines = 'philippines', Zimbabwe = 'zimbabwe', Belize = 'belize', Botswana = 'botswana', Jordan = 'jordan', Luxembourg = 'luxembourg', Norway = 'norway', Mauritania = 'mauritania', SaintLucia = 'saint-lucia', Turkey = 'turkey', Grenada = 'grenada', Bulgaria = 'bulgaria', Chile = 'chile', Kenya = 'kenya', CzechRepublic = 'czech-republic', Haiti = 'haiti', China = 'china', Palestine = 'palestine', ElSalvador = 'el-salvador', Libya = 'libya', Singapore = 'singapore', Colombia = 'colombia', Nigeria = 'nigeria', Nepal = 'nepal', Palau = 'palau', SriLanka = 'sri-lanka', Mexico = 'mexico', Slovakia = 'slovakia', TrinidadAndTobago = 'trinidad-and-tobago', Bhutan = 'bhutan', Ireland = 'ireland', Liberia = 'liberia', Slovenia = 'slovenia', Turkmenistan = 'turkmenistan', Bolivia = 'bolivia', Barbados = 'barbados', CongoRepublic = 'congo-republic', UnitedKingdom = 'united-kingdom', Malta = 'malta', Uzbekistan = 'uzbekistan', CentralAfricanRepublic = 'central-african-republic', Laos = 'laos', Bangladesh = 'bangladesh', Comoros = 'comoros', Sudan = 'sudan', TimorLeste = 'timor-leste', NewZealand = 'new-zealand', Uganda = 'uganda', Iraq = 'iraq', Cambodia = 'cambodia', Yemen = 'yemen', Belgium = 'belgium', Serbia = 'serbia', Switzerland = 'switzerland', Egypt = 'egypt', Niger = 'niger', AntiguaAndBarbuda = 'antigua-and-barbuda', SouthSudan = 'south-sudan', Suriname = 'suriname', Nicaragua = 'nicaragua', Malawi = 'malawi', Tajikistan = 'tajikistan', Guyana = 'guyana', Senegal = 'senegal', Thailand = 'thailand', NorthMacedonia = 'north-macedonia', Togo = 'togo', Ecuador = 'ecuador', Eritrea = 'eritrea', Belarus = 'belarus', Oman = 'oman', Syria = 'syria', Honduras = 'honduras', Ukraine = 'ukraine', DominicanRepublic = 'dominican-republic', Gambia = 'gambia', Finland = 'finland', Australia = 'australia', GuineaBissau = 'guinea-bissau', Ghana = 'ghana', BurkinaFaso = 'burkina-faso', Mozambique = 'mozambique', NorthKorea = 'north-korea', Panama = 'panama', Poland = 'poland', Lithuania = 'lithuania', Austria = 'austria', Hungary = 'hungary', Argentina = 'argentina', Myanmar = 'myanmar', Algeria = 'algeria', Uruguay = 'uruguay', UnitedArabEmirates = 'united-arab-emirates', Montenegro = 'montenegro', Guatemala = 'guatemala', Portugal = 'portugal', Mongolia = 'mongolia', Sweden = 'sweden', VaticanCity = 'vatican-city', Pakistan = 'pakistan', Vietnam = 'vietnam', Namibia = 'namibia', Brunei = 'brunei', CaboVerde = 'cabo-verde', Gabon = 'gabon', Romania = 'romania', Greece = 'greece', Jamaica = 'jamaica', Seychelles = 'seychelles', Angola = 'angola', Tonga = 'tonga', Qatar = 'qatar', Japan = 'japan', Mauritius = 'mauritius', Djibouti = 'djibouti', Iran = 'iran', Kazakhstan = 'kazakhstan', Nauru = 'nauru', Kiribati = 'kiribati', Peru = 'peru', Russia = 'russia', Armenia = 'armenia', Cameroon = 'cameroon', PapuaNewGuinea = 'papua-new-guinea', Taiwan = 'taiwan', Somalia = 'somalia', Cuba = 'cuba', Guinea = 'guinea', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', SaoTomeAndPrincipe = 'sao-tome-and-principe', Tunisia = 'tunisia', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Burundi = 'burundi', Monaco = 'monaco', SaintKittsAndNevis = 'saint-kitts-and-nevis', Afghanistan = 'afghanistan', SolomonIslands = 'solomon-islands', Bahamas = 'bahamas', Albania = 'albania', Canada = 'canada', France = 'france', SanMarino = 'san-marino', Croatia = 'croatia', SouthKorea = 'south-korea', Tuvalu = 'tuvalu', Kyrgyzstan = 'kyrgyzstan', MarshallIslands = 'marshall-islands', Fiji = 'fiji', Latvia = 'latvia', Maldives = 'maldives', Rwanda = 'rwanda', Paraguay = 'paraguay', Samoa = 'samoa', CoteDIvoire = 'cote-d-ivoire', Tanzania = 'tanzania', Lesotho = 'lesotho', Cyprus = 'cyprus', Dominica = 'dominica', Georgia = 'georgia', Azerbaijan = 'azerbaijan', CostaRica = 'costa-rica', Andorra = 'andorra', Liechtenstein = 'liechtenstein', SaudiArabia = 'saudi-arabia', Germany = 'germany', Spain = 'spain', Zambia = 'zambia', Brazil = 'brazil', Chad = 'chad', India = 'india', Mali = 'mali', Morocco = 'morocco', Iceland = 'iceland', Moldova = 'moldova', Madagascar = 'madagascar', SierraLeone = 'sierra-leone' }
export const enum ConversationStatus { Archived = 'archived', Snoozed = 'snoozed', Deleted = 'deleted', Active = 'active', Closed = 'closed' }
export const enum ContentVisibility { Shared = 'shared', Public = 'public', Protected = 'protected', Private = 'private', Internal = 'internal' }
export const enum ContactAddressType { Personal = 'personal', Business = 'business', Billing = 'billing', Shipping = 'shipping', Home = 'home', Work = 'work', Temporary = 'temporary', Other = 'other' }
export const enum CommunicationRole { Admin = 'admin', Bot = 'bot', System = 'system', Moderator = 'moderator', Channel = 'channel', Member = 'member', User = 'user', Group = 'group', Assistant = 'assistant', Owner = 'owner', Guest = 'guest', Service = 'service' }
export const enum CommunicationMethod { Mail = 'mail', Phone = 'phone', InPerson = 'in-person', Sms = 'sms', Text = 'text', PushNotification = 'push-notification', Other = 'other', InstantMessage = 'instant-message', Email = 'email', VideoCall = 'video-call', SocialMedia = 'social-media' }
export const enum ChatType { Public = 'public', Group = 'group', Private = 'private' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum CampaignType { Display = 'display', Other = 'other', SocialMedia = 'social-media', Email = 'email', SearchEngine = 'search-engine' }
export const enum CampaignStatus { Planned = 'planned', Draft = 'draft', Archived = 'archived', Active = 'active', Scheduled = 'scheduled', Cancelled = 'cancelled', Completed = 'completed', Paused = 'paused' }
export const enum CallDirection { Outbound = 'outbound', Conference = 'conference', Inbound = 'inbound', Unknown = 'unknown' }
export const enum BillingStatus { Draft = 'draft', Submitted = 'submitted', Overdue = 'overdue', Deleted = 'deleted', PartiallyPaid = 'partially-paid', Paid = 'paid', Unpaid = 'unpaid', Authorised = 'authorised', Pending = 'pending', Voided = 'voided' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Qualified = 'qualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum AiToolChoiceType { Tool = 'tool', None = 'none', Auto = 'auto', Any = 'any' }
export const enum AiRole { Assistant = 'assistant', User = 'user', Tool = 'tool' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', Text = 'text', Image = 'image', ToolUse = 'tool-use' }
export const enum AccountingAccountType { EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityPartnerContributions = 'equity::partner-contributions', EquityPreferredStock = 'equity::preferred-stock', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetSavings = 'asset::savings', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetLicenses = 'asset::licenses', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseManagementCompensation = 'expense::management-compensation', EquityPersonalExpense = 'equity::personal-expense', EquityCapitalReserves = 'equity::capital-reserves', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseStaffCosts = 'expense::staff-costs', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseBadDebts = 'expense::bad-debts', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', ExpenseEquipmentRental = 'expense::equipment-rental', AssetInvestments = 'asset::investments', EquityPersonalIncome = 'equity::personal-income', Asset = 'asset', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetUndepositedFunds = 'asset::undeposited-funds', LiabilityBankLoans = 'liability::bank-loans', RevenueNonProfitIncome = 'revenue::non-profit-income', ExpenseSundry = 'expense::sundry', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiability = 'other-current-liability', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', RevenueSalesRetail = 'revenue::sales-retail', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetMoneyMarket = 'asset::money-market', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetTrustAccounts = 'asset::trust-accounts', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityCommonStock = 'equity::common-stock', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseUtilities = 'other-expense::utilities', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetRetainage = 'asset::retainage', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetInternalTransfers = 'asset::internal-transfers', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityNotesPayable = 'liability::notes-payable', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetGoodwill = 'asset::goodwill', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AccountsReceivable = 'accounts-receivable', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseDepreciation = 'other-expense::depreciation', RevenueOperatingGrants = 'revenue::operating-grants', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetInventory = 'asset::inventory', AssetLoansToOthers = 'asset::loans-to-others', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetChecking = 'asset::checking', AssetOtherCurrentAsset = 'asset::other-current-asset', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseAmortization = 'other-expense::amortization', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', EquityHealthcare = 'equity::healthcare', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetBank = 'asset::bank', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetIntangibleAssets = 'asset::intangible-assets', AssetCashOnHand = 'asset::cash-on-hand', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetParticipatingInterests = 'asset::participating-interests', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseAuto = 'expense::auto', ExpenseBorrowingCost = 'expense::borrowing-cost', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetLoansToOfficers = 'asset::loans-to-officers', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherExpense = 'other-expense', AssetOtherConsumables = 'asset::other-consumables', EquityPartnersEquity = 'equity::partners-equity', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetBuildings = 'asset::buildings', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseUtilities = 'expense::utilities', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetInvestmentOther = 'asset::investment-other', OtherIncome = 'other-income', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseInsurance = 'expense::insurance', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseTravel = 'expense::travel', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetLand = 'asset::land', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetDeferredTax = 'asset::deferred-tax', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetDevelopmentCosts = 'asset::development-costs', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetOtherAsset = 'asset::other-asset', AssetSecurityDeposits = 'asset::security-deposits', ExpenseEntertainment = 'expense::entertainment', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityLongTermDebit = 'liability::long-term-debit', ExpenseDistributionCosts = 'expense::distribution-costs', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseExternalServices = 'expense::external-services', AssetOtherFixedAssets = 'asset::other-fixed-assets', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityPartnerDistributions = 'equity::partner-distributions', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', RevenueRevenueGeneral = 'revenue::revenue-general', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', Expense = 'expense', Equity = 'equity', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetFixedAsset = 'asset::fixed-asset', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', EquityInvestmentGrants = 'equity::investment-grants', ExpenseTaxesPaid = 'expense::taxes-paid', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', RevenueIncome = 'revenue::income', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', CostOfGoodsSold = 'cost-of-goods-sold', EquityFunds = 'equity::funds', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseTravelMeals = 'expense::travel-meals', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityShareCapital = 'equity::share-capital', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetLeaseholdImprovements = 'asset::leasehold-improvements', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetVehicles = 'asset::vehicles', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityTreasuryStock = 'equity::treasury-stock', OtherExpenseDepletion = 'other-expense::depletion', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetDepletableAssets = 'asset::depletable-assets', ExpenseBankCharges = 'expense::bank-charges', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityAccountsPayable = 'liability::accounts-payable', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetCapitalWip = 'asset::capital-wip', AssetLandAsset = 'asset::land-asset', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest' }
export const enum AccountStatus { Closed = 'closed', Inactive = 'inactive', Pending = 'pending', Suspended = 'suspended', Active = 'active' }
export const enum AccountEngagementLevel { Warm = 'warm', Unknown = 'unknown', Cold = 'cold', Hot = 'hot' }
export const enum AccessControlModel { Rbac = 'rbac', None = 'none', Abac = 'abac', Mac = 'mac', Custom = 'custom', Dac = 'dac' }

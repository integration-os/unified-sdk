// This file is auto-generated. Do not edit it manually.

export interface Weather { humidity?: string;
    windSpeedMph?: string;
    windDirection?: string;
    id?: string;
    feelsLikeC?: string;
    temperatureFahrenheit?: string;
    region?: string;
    commonModel?: string;
    temperatureCelsius?: string;
    description?: string;
    feelsLikeF?: string;
    country?: string;
    windSpeedKph?: string;
    location?: string }
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
export const enum AccountType { AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', RevenueOperatingGrants = 'revenue::operating-grants', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetTrustAccounts = 'asset::trust-accounts', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetBuildings = 'asset::buildings', AssetLeaseholdImprovements = 'asset::leasehold-improvements', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', ExpenseBadDebts = 'expense::bad-debts', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseMatCredit = 'other-expense::mat-credit', EquityPartnerDistributions = 'equity::partner-distributions', AssetChecking = 'asset::checking', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetDeferredTax = 'asset::deferred-tax', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetSavings = 'asset::savings', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherExpenseDepletion = 'other-expense::depletion', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseAuto = 'expense::auto', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetOtherCurrentAsset = 'asset::other-current-asset', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseTravel = 'expense::travel', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetFixedAsset = 'asset::fixed-asset', ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', RevenueSalesRetail = 'revenue::sales-retail', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseHomeOffice = 'other-expense::home-office', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetBank = 'asset::bank', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityLongTermLiability = 'liability::long-term-liability', AssetOtherAsset = 'asset::other-asset', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityCapitalReserves = 'equity::capital-reserves', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', LiabilityCreditCard = 'liability::credit-card', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', EquityPersonalIncome = 'equity::personal-income', AssetInternalTransfers = 'asset::internal-transfers', AssetLeaseBuyout = 'asset::lease-buyout', Income = 'income', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetVehicles = 'asset::vehicles', Expense = 'expense', LiabilityLongTermDebit = 'liability::long-term-debit', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseEntertainment = 'expense::entertainment', ExpenseOfficeExpenses = 'expense::office-expenses', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', Asset = 'asset', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetLoansToOfficers = 'asset::loans-to-officers', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityFunds = 'equity::funds', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseInterestPaid = 'expense::interest-paid', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetSecurityDeposits = 'asset::security-deposits', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseEquipmentRental = 'expense::equipment-rental', ExpensePurchasesRebates = 'expense::purchases-rebates', RevenueRevenueGeneral = 'revenue::revenue-general', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseFinanceCosts = 'expense::finance-costs', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', Equity = 'equity', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetCashOnHand = 'asset::cash-on-hand', AssetLoansToOthers = 'asset::loans-to-others', EquityDividendDisbursed = 'equity::dividend-disbursed', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', Liability = 'liability', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiability = 'other-current-liability', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', OtherExpenseAmortization = 'other-expense::amortization', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetParticipatingInterests = 'asset::participating-interests', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', EquityInvestmentGrants = 'equity::investment-grants', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseVehicle = 'other-expense::vehicle', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', CostOfGoodsSold = 'cost-of-goods-sold', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseDistributionCosts = 'expense::distribution-costs', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetLandAsset = 'asset::land-asset', EquityPartnersEquity = 'equity::partners-equity', ExpenseTaxesPaid = 'expense::taxes-paid', OtherExpenseUtilities = 'other-expense::utilities', EquityPersonalExpense = 'equity::personal-expense', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherIncome = 'other-income', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', EquityTreasuryStock = 'equity::treasury-stock', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetDepletableAssets = 'asset::depletable-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherIncomeDividendIncome = 'other-income::dividend-income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseSundry = 'expense::sundry', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', RevenueIncome = 'revenue::income', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityNotesPayable = 'liability::notes-payable', ExpensePromotionalMeals = 'expense::promotional-meals', AssetInvestments = 'asset::investments', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', EquityCommonStock = 'equity::common-stock', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetMoneyMarket = 'asset::money-market', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseUtilities = 'expense::utilities', AssetInvestmentOther = 'asset::investment-other', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetInventory = 'asset::inventory', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityPartnerContributions = 'equity::partner-contributions', ExpensePenaltiesSettlements = 'expense::penalties-settlements', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetUndepositedFunds = 'asset::undeposited-funds', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityHealthcare = 'equity::healthcare', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseInsurance = 'expense::insurance', AssetGlobalTaxRefund = 'asset::global-tax-refund', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetRetainage = 'asset::retainage', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityOwnersEquity = 'equity::owners-equity', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseManagementCompensation = 'expense::management-compensation', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', EquityShareCapital = 'equity::share-capital', AssetOtherConsumables = 'asset::other-consumables', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetDevelopmentCosts = 'asset::development-costs', AssetLicenses = 'asset::licenses', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetFixedAssetSoftware = 'asset::fixed-asset-software', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseStaffCosts = 'expense::staff-costs', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetIntangibleAssets = 'asset::intangible-assets', LiabilityAccountsPayable = 'liability::accounts-payable', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetCapitalWip = 'asset::capital-wip', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetLand = 'asset::land', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseExternalServices = 'expense::external-services', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetLongTermInvestments = 'asset::long-term-investments', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseOtherExternalServices = 'expense::other-external-services', OtherIncomeInterestEarned = 'other-income::interest-earned', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', EquityPreferredStock = 'equity::preferred-stock', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetGoodwill = 'asset::goodwill', AssetNonCurrentAssets = 'asset::non-current-assets', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AccountsReceivable = 'accounts-receivable', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpense = 'other-expense', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseRentAndLease = 'other-expense::rent-and-lease' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum Status { Expired = 'expired', Scheduled = 'scheduled', Active = 'active' }
export const enum Roles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', All = 'all', SpecificCustomers = 'specific-customers' }
export const enum ChannelAvailability { AllChannels = 'all-channels', Online = 'online', InApp = 'in-app', InStore = 'in-store' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum Gender { Other = 'other', PreferNotToSay = 'prefer not to say', Male = 'male', Female = 'female' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', SpecificItems = 'specific-items', AllItems = 'all-items' }
export const enum ReceiverRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum TransactionMethod { Mail = 'mail', Mobile = 'mobile', Online = 'online', BankBranch = 'bank-branch', Telephone = 'telephone', Atm = 'atm' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum UserRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum VisibilityScope { Global = 'global', Private = 'private', Internal = 'internal', App = 'app', Web = 'web' }
export const enum UserStatus { WaitListed = 'wait-listed', Pending = 'pending', Active = 'active', Banned = 'banned', Archived = 'archived', Deleted = 'deleted', Verified = 'verified', Inactive = 'inactive', Suspended = 'suspended' }
export const enum UniversalIdentifierType { Uuid = 'uuid', String = 'string', Email = 'email', Number = 'number', Url = 'url' }
export const enum TransactionType { Payment = 'payment', Deposit = 'deposit', Adjustment = 'adjustment', Withdrawal = 'withdrawal', Fee = 'fee', Transfer = 'transfer', Refund = 'refund', Charge = 'charge' }
export const enum TransactionStatus { Cancelled = 'cancelled', Error = 'error', Failed = 'failed', InProgress = 'in-progress', Pending = 'pending', Succeeded = 'succeeded', Initiated = 'initiated' }
export const enum TransactionChannel { Online = 'online', Atm = 'atm', Mail = 'mail', Mobile = 'mobile', Other = 'other', BankBranch = 'bank-branch', Telephone = 'telephone', InPerson = 'in-person' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { SemiMonthly = 'semi-monthly', Daily = 'daily', Hourly = 'hourly', AdHoc = 'ad-hoc', Annually = 'annually', Quarterly = 'quarterly', Monthly = 'monthly', Custom = 'custom', Biennially = 'biennially', SemiAnnually = 'semi-annually', Triennially = 'triennially', Secondly = 'secondly', Biweekly = 'biweekly', Minutely = 'minutely', Weekly = 'weekly' }
export const enum TaxType { Variable = 'variable', Additive = 'additive', Inclusive = 'inclusive' }
export const enum TaskStatus { OnHold = 'on-hold', Blocked = 'blocked', Cancelled = 'cancelled', Todo = 'todo', InProgress = 'in-progress', Done = 'done' }
export const enum TableType { View = 'view', External = 'external', MaterializedView = 'materialized-view', Table = 'table', Snapshot = 'snapshot' }
export const enum SupportTicketPriority { Low = 'low', Medium = 'medium', High = 'high', Immediate = 'immediate', Urgent = 'urgent' }
export const enum SupportQueryType { Bug = 'bug', Problem = 'problem', Feedback = 'feedback', Incident = 'incident', Question = 'question', Task = 'task', FeatureRequest = 'feature-request' }
export const enum StakeholderType { Partner = 'partner', Customer = 'customer', Investor = 'investor', Vendor = 'vendor', Other = 'other', Competitor = 'competitor' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum SocialPlatform { Instagram = 'instagram', Facebook = 'facebook', Tiktok = 'tiktok', Pinterest = 'pinterest', Reddit = 'reddit', Skype = 'skype', OtherSocialPlatform = 'other-social-platform', X = 'x', Linkedin = 'linkedin', Youtube = 'youtube', Snapchat = 'snapchat', Twitter = 'twitter', Tumblr = 'tumblr' }
export const enum ReviewApprovalStatus { Approved = 'approved', Rejected = 'rejected', Revised = 'revised', InReview = 'in-review', Pending = 'pending' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ReactionType { Sad = 'sad', Dislike = 'dislike', Like = 'like', Interested = 'interested', Laugh = 'laugh', Love = 'love', Wow = 'wow', Angry = 'angry', Bookmark = 'bookmark' }
export const enum PromotionType { FreeShipping = 'free-shipping', BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount', Other = 'other', RewardPoints = 'reward-points', Percentage = 'percentage' }
export const enum ProductAvailabilityStatus { Discontinued = 'discontinued', InStock = 'in-stock', PreOrder = 'pre-order', BackOrder = 'back-order', OutOfStock = 'out-of-stock' }
export const enum PriorityLevel { Medium = 'medium', Low = 'low', Urgent = 'urgent', Elevated = 'elevated', High = 'high' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum PrepaidType { UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid', Prepaid = 'prepaid' }
export const enum PaymentTerm { DueEndOfMonth = 'due-end-of-month', Net = 'net', CashBeforeShipment = 'cash-before-shipment', Net30 = 'net-30', Net90 = 'net-90', Prepayment = 'prepayment', CashInAdvance = 'cash-in-advance', Net60 = 'net-60', Prepaid = 'prepaid', DeferredPayment = 'deferred-payment', Installment = 'installment', UponCompletion = 'upon-completion', Custom = 'custom', CashOnDelivery = 'cash-on-delivery', CashWithOrder = 'cash-with-order', DueOnReceipt = 'due-on-receipt' }
export const enum PaymentStatus { PartiallyRefunded = 'partially-refunded', Adjusted = 'adjusted', Paid = 'paid', Voided = 'voided', Submitted = 'submitted', Draft = 'draft', Refunded = 'refunded', Failed = 'failed', Deleted = 'deleted', Authorized = 'authorized', Disputed = 'disputed', Error = 'error', Cancelled = 'cancelled', Pending = 'pending', Processing = 'processing', Succeeded = 'succeeded', Partial = 'partial', Overdue = 'overdue' }
export const enum PaymentMethod { Paypal = 'paypal', Check = 'check', CreditCard = 'credit-card', CashOnDelivery = 'cash-on-delivery', DebitCard = 'debit-card', MobilePayment = 'mobile-payment', BankTransfer = 'bank-transfer', Cash = 'cash', MobileWallet = 'mobile-wallet', Other = 'other', Cryptocurrency = 'cryptocurrency' }
export const enum ParticipantType { Organization = 'organization', Team = 'team', ExternalParticipant = 'external-participant', User = 'user', Group = 'group' }
export const enum ParticipantEngagementStatus { Moderator = 'moderator', Guest = 'guest', Banned = 'banned', Active = 'active', Admin = 'admin', Left = 'left', Inactive = 'inactive' }
export const enum OrganizationalRole { Manager = 'manager', Employee = 'employee', Admin = 'admin', Supervisor = 'supervisor', Contractor = 'contractor', Other = 'other', Director = 'director' }
export const enum OrderingCriteria { Alphabetical = 'alphabetical', Rating = 'rating', Relevance = 'relevance', Popularity = 'popularity', Manual = 'manual', CreationDate = 'creation-date', PriceAscending = 'price-ascending', PriceDescending = 'price-descending' }
export const enum OrderStatus { Completed = 'completed', Refunded = 'refunded', AwaitingShipment = 'awaiting-shipment', Delivered = 'delivered', AwaitingPayment = 'awaiting-payment', Draft = 'draft', Abandoned = 'abandoned', Processing = 'processing', AwaitingPickup = 'awaiting-pickup', PartiallyFulfilled = 'partially-fulfilled', Confirmed = 'confirmed', Disputed = 'disputed', Cancelled = 'cancelled', Returned = 'returned', Failed = 'failed', Pending = 'pending', Shipped = 'shipped', OnHold = 'on-hold' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum MimeType { ImageGif = 'image/gif', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png' }
export const enum MessageReadStatus { Sent = 'sent', Failed = 'failed', Read = 'read', Unsent = 'unsent', Delivered = 'delivered' }
export const enum MessageDeliveryStatus { Failed = 'failed', Sent = 'sent', Delivered = 'delivered', Read = 'read', Pending = 'pending', Error = 'error', Undeliverable = 'undeliverable' }
export const enum MessageContentType { Link = 'link', Text = 'text', Contact = 'contact', Location = 'location', Audio = 'audio', Gif = 'gif', Html = 'html', Document = 'document', Image = 'image', Video = 'video', File = 'file', Sticker = 'sticker', Voice = 'voice' }
export const enum LifecycleStatus { Active = 'active', Redeemed = 'redeemed', Expired = 'expired', Suspended = 'suspended', Cancelled = 'cancelled', Issued = 'issued' }
export const enum LeadLifecycleStatus { Connected = 'connected', BadTiming = 'bad-timing', New = 'new', Open = 'open', Converted = 'converted', InProcess = 'in-process', Revisited = 'revisited', Unqualified = 'unqualified', Lost = 'lost', AttemptedToContact = 'attempted-to-contact' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Corrected = 'corrected', Voided = 'voided', Draft = 'draft', Pending = 'pending', Error = 'error', Posted = 'posted' }
export const enum ItemEntityStatus { Pending = 'pending', Suspended = 'suspended', Deleted = 'deleted', Completed = 'completed', Active = 'active', Inactive = 'inactive', Archived = 'archived' }
export const enum ItemCondition { LikeNew = 'like-new', Refurbished = 'refurbished', New = 'new', OpenBox = 'open-box', Damaged = 'damaged', Used = 'used' }
export const enum ItemAvailabilityStatus { Inactive = 'inactive', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Active = 'active' }
export const enum IssueLifecycleStatus { Pending = 'pending', Closed = 'closed', OnHold = 'on-hold', Cancelled = 'cancelled', Open = 'open', InProgress = 'in-progress', Waiting = 'waiting', Resolved = 'resolved' }
export const enum InvoiceAdjustmentType { Shipping = 'shipping', Other = 'other', Tip = 'tip', Discount = 'discount', Tax = 'tax' }
export const enum InventoryStorageType { RetailStore = 'retail-store', Other = 'other', Warehouse = 'warehouse', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImagePng = 'image/png', ImageHeic = 'image/heic', ImageSvgXml = 'image/svg+xml', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff', ImageGif = 'image/gif', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp' }
export const enum IdentityProvider { Foursquare = 'foursquare', Telegram = 'telegram', Dribbble = 'dribbble', Facebook = 'facebook', Google = 'google', Flickr = 'flickr', Pinterest = 'pinterest', Instagram = 'instagram', Apple = 'apple', Microsoft = 'microsoft', Qq = 'qq', Paypal = 'paypal', Yahoo = 'yahoo', Discord = 'discord', Vimeo = 'vimeo', Whatsapp = 'whatsapp', Slack = 'slack', Behance = 'behance', Twitter = 'twitter', Tumblr = 'tumblr', Amazon = 'amazon', Tiktok = 'tiktok', Linkedin = 'linkedin', Snapchat = 'snapchat', Other = 'other', Github = 'github', Line = 'line', Reddit = 'reddit', Wechat = 'wechat', Signal = 'signal' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', Gst = 'gst', Other = 'other', Vat = 'vat', ExciseTax = 'excise-tax', SalesTax = 'sales-tax' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Female = 'female', Male = 'male', Other = 'other' }
export const enum FulfillmentStatus { Returned = 'returned', Delivered = 'delivered', Cancelled = 'cancelled', InTransit = 'in-transit', Pending = 'pending', Failure = 'failure' }
export const enum FinancialTransactionType { Withdrawal = 'withdrawal', Sale = 'sale', SpendPrepayment = 'spend-prepayment', Transfer = 'transfer', Other = 'other', Adjustment = 'adjustment', Receive = 'receive', Refund = 'refund', Fee = 'fee', Dividend = 'dividend', ReceivePrepayment = 'receive-prepayment', SpendOverpayment = 'spend-overpayment', Interest = 'interest', Chargeback = 'chargeback', Charge = 'charge', Spend = 'spend', ReceiveOverpayment = 'receive-overpayment', Deposit = 'deposit', Payment = 'payment' }
export const enum FinancialTransactionStatus { Pending = 'pending', SettlementInProgress = 'settlement-in-progress', Cleared = 'cleared', Failed = 'failed', Cancelled = 'cancelled', Disputed = 'disputed', Authorized = 'authorized', Refunded = 'refunded' }
export const enum FinancialTrackingCategories { None = 'none', Department = 'department', CostCenter = 'cost-center', Location = 'location', Customer = 'customer', Vendor = 'vendor', Service = 'service', Product = 'product', Class = 'class', Other = 'other', Project = 'project', Employee = 'employee', Division = 'division' }
export const enum FinancialDisputeStatus { Lost = 'lost', ChargeRefunded = 'charge-refunded', NeedsResponse = 'needs-response', Closed = 'closed', Won = 'won', Escalated = 'escalated', AwaitingEvidence = 'awaiting-evidence', UnderReview = 'under-review' }
export const enum FinancialChargeType { ServiceCharge = 'service-charge', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', Commission = 'commission', Other = 'other', LateFee = 'late-fee', TransactionFee = 'transaction-fee' }
export const enum FinancialAccountStatus { Suspended = 'suspended', UnderReview = 'under-review', Frozen = 'frozen', Delinquent = 'delinquent', Active = 'active', Closed = 'closed', Inactive = 'inactive' }
export const enum FileType { Folder = 'folder', Url = 'url', File = 'file' }
export const enum ExpenseApprovalStatus { Cancelled = 'cancelled', Processed = 'processed', Denied = 'denied', Reimbursed = 'reimbursed', Reviewing = 'reviewing', New = 'new', Approved = 'approved', Pending = 'pending' }
export const enum EventVisibility { Public = 'public', Private = 'private', Confidential = 'confidential' }
export const enum EventStatus { Cancelled = 'cancelled', Confirmed = 'confirmed', Tentative = 'tentative' }
export const enum EventRuleType { Exclude = 'exclude', AddDates = 'add-dates', ExcludeDates = 'exclude-dates', Repeat = 'repeat' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventFrequency { Monthly = 'monthly', Yearly = 'yearly', Daily = 'daily', Weekly = 'weekly' }
export const enum EntryMethod { Emv = 'emv', Keyed = 'keyed', Swiped = 'swiped', Contactless = 'contactless', OnFile = 'on-file' }
export const enum EntityLifecycleStatus { Archived = 'archived', Scheduled = 'scheduled', Preorder = 'preorder', Active = 'active', Draft = 'draft', Deleted = 'deleted', Inactive = 'inactive' }
export const enum EntityCategory { Task = 'task', Person = 'person', Project = 'project', Owner = 'owner', Document = 'document', Message = 'message', User = 'user', Event = 'event', Other = 'other', Link = 'link' }
export const enum EmploymentType { Internship = 'internship', Seasonal = 'seasonal', Volunteer = 'volunteer', Permanent = 'permanent', Contract = 'contract', Temporary = 'temporary', FullTime = 'full-time', PartTime = 'part-time', Freelance = 'freelance' }
export const enum EmploymentAndCandidateStatus { New = 'new', NotSelected = 'not-selected', Other = 'other', Interviewing = 'interviewing', Terminated = 'terminated', Inactive = 'inactive', OnLeave = 'on-leave', InReview = 'in-review', Active = 'active', Hired = 'hired', OfferExtended = 'offer-extended' }
export const enum EmailCategoryType { Educational = 'educational', Transactional = 'transactional', Governmental = 'governmental', Spam = 'spam', Other = 'other', Promotional = 'promotional', Personal = 'personal', Business = 'business' }
export const enum DiscountType { Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', UnknownDiscount = 'unknown-discount', ConditionalDiscount = 'conditional-discount', TieredDiscount = 'tiered-discount', VariablePercentage = 'variable-percentage', VariableAmount = 'variable-amount', FixedAmount = 'fixed-amount' }
export const enum DeviceUsageType { Educational = 'educational', Other = 'other', Business = 'business', Industrial = 'industrial', Healthcare = 'healthcare', Home = 'home', Personal = 'personal' }
export const enum DayOfWeek { Saturday = 'saturday', Monday = 'monday', Tuesday = 'tuesday', Thursday = 'thursday', Sunday = 'sunday', Wednesday = 'wednesday', Friday = 'friday' }
export const enum DatabaseType { Linked = 'linked', Public = 'public', Default = 'default', External = 'external' }
export const enum DataType { Date = 'date', Json = 'json', Null = 'null', Undefined = 'undefined', Custom = 'custom', Object = 'object', Number = 'number', Timestamp = 'timestamp', Boolean = 'boolean', String = 'string', Array = 'array', Binary = 'binary' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CustomerType { Online = 'online', Wholesale = 'wholesale', B2c = 'b2c', Corporate = 'corporate', B2b = 'b2b', Retail = 'retail' }
export const enum CustomerStatus { Archived = 'archived', Pending = 'pending', Suspended = 'suspended', Inactive = 'inactive', Active = 'active' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', NewCustomers = 'new-customers', VipCustomers = 'vip-customers', ReturningCustomers = 'returning-customers', SpecificConditions = 'specific-conditions', Other = 'other' }
export const enum Currency { CUP = 'cup', XCD = 'xcd', OMR = 'omr', AWG = 'awg', PLN = 'pln', SRD = 'srd', AUD = 'aud', KYD = 'kyd', MXN = 'mxn', TJS = 'tjs', CZK = 'czk', SEK = 'sek', PAB = 'pab', THB = 'thb', GYD = 'gyd', SBD = 'sbd', TMT = 'tmt', NAD = 'nad', BMD = 'bmd', IDR = 'idr', UGX = 'ugx', XAF = 'xaf', LRD = 'lrd', DZD = 'dzd', SAR = 'sar', FJD = 'fjd', SYP = 'syp', LSL = 'lsl', ZMW = 'zmw', TOP = 'top', TWD = 'twd', KPW = 'kpw', ALL = 'all', RUB = 'rub', NGN = 'ngn', PYG = 'pyg', HNL = 'hnl', MAD = 'mad', NOK = 'nok', LBP = 'lbp', XOF = 'xof', ARS = 'ars', BYN = 'byn', GTQ = 'gtq', BRL = 'brl', DKK = 'dkk', HTG = 'htg', JOD = 'jod', MYR = 'myr', MOP = 'mop', GGP = 'ggp', CVE = 'cve', GBP = 'gbp', CAD = 'cad', MVR = 'mvr', TND = 'tnd', MMK = 'mmk', CNY = 'cny', BTN = 'btn', ERN = 'ern', GEL = 'gel', BBD = 'bbd', STN = 'stn', HKD = 'hkd', IQD = 'iqd', UYU = 'uyu', HUF = 'huf', TRY = 'try', BAM = 'bam', ZAR = 'zar', BGN = 'bgn', BSD = 'bsd', CLP = 'clp', RON = 'ron', GIP = 'gip', BOB = 'bob', NZD = 'nzd', SOS = 'sos', CUC = 'cuc', KGS = 'kgs', BWP = 'bwp', IMP = 'imp', BDT = 'bdt', KRW = 'krw', PKR = 'pkr', USD = 'usd', AED = 'aed', PEN = 'pen', QAR = 'qar', UAH = 'uah', ILS = 'ils', SLL = 'sll', MNT = 'mnt', MZN = 'mzn', SHP = 'shp', GHS = 'ghs', INR = 'inr', YER = 'yer', LKR = 'lkr', AMD = 'amd', KZT = 'kzt', GNF = 'gnf', JPY = 'jpy', AZN = 'azn', PHP = 'php', TVD = 'tvd', TZS = 'tzs', MGA = 'mga', CHF = 'chf', MKD = 'mkd', EUR = 'eur', FKP = 'fkp', KWD = 'kwd', BHD = 'bhd', MRU = 'mru', LAK = 'lak', MWK = 'mwk', RWF = 'rwf', SSP = 'ssp', SZL = 'szl', UZS = 'uzs', DOP = 'dop', VND = 'vnd', HRK = 'hrk', NPR = 'npr', KES = 'kes', VUV = 'vuv', CDF = 'cdf', AOA = 'aoa', MUR = 'mur', IRR = 'irr', AFN = 'afn', JEP = 'jep', RSD = 'rsd', SCR = 'scr', ZWL = 'zwl', BIF = 'bif', SGD = 'sgd', VES = 'ves', ISK = 'isk', COP = 'cop', ANG = 'ang', ETB = 'etb', GMD = 'gmd', KID = 'kid', BZD = 'bzd', EGP = 'egp', KMF = 'kmf', SDG = 'sdg', MDL = 'mdl', TTD = 'ttd', XDR = 'xdr', XPF = 'xpf', CRC = 'crc', PGK = 'pgk', JMD = 'jmd', DJF = 'djf', BND = 'bnd', FOK = 'fok', WST = 'wst', LYD = 'lyd', KHR = 'khr', NIO = 'nio' }
export const enum CreditType { Prepayment = 'prepayment', Supplier = 'supplier', Overpayment = 'overpayment', Customer = 'customer', Goodwill = 'goodwill' }
export const enum CreditNoteStatus { Applied = 'applied', Void = 'void', Disputed = 'disputed', Completed = 'completed', Revised = 'revised', Pending = 'pending', Cancelled = 'cancelled', Issued = 'issued', Draft = 'draft' }
export const enum Country { Uganda = 'uganda', Yemen = 'yemen', Eritrea = 'eritrea', Palestine = 'palestine', Denmark = 'denmark', Seychelles = 'seychelles', AntiguaAndBarbuda = 'antigua-and-barbuda', Iraq = 'iraq', Lebanon = 'lebanon', Portugal = 'portugal', Mongolia = 'mongolia', SaoTomeAndPrincipe = 'sao-tome-and-principe', Venezuela = 'venezuela', Iceland = 'iceland', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Ghana = 'ghana', UnitedArabEmirates = 'united-arab-emirates', CongoRepublic = 'congo-republic', Germany = 'germany', Chad = 'chad', Cyprus = 'cyprus', Ukraine = 'ukraine', Tonga = 'tonga', Bangladesh = 'bangladesh', Benin = 'benin', Mali = 'mali', Vanuatu = 'vanuatu', Argentina = 'argentina', Algeria = 'algeria', CzechRepublic = 'czech-republic', TrinidadAndTobago = 'trinidad-and-tobago', Morocco = 'morocco', Pakistan = 'pakistan', SaudiArabia = 'saudi-arabia', SouthAfrica = 'south-africa', Barbados = 'barbados', Gabon = 'gabon', NewZealand = 'new-zealand', Turkmenistan = 'turkmenistan', Qatar = 'qatar', Guinea = 'guinea', France = 'france', Uzbekistan = 'uzbekistan', Dominica = 'dominica', SaintKittsAndNevis = 'saint-kitts-and-nevis', Niger = 'niger', Grenada = 'grenada', Laos = 'laos', Cameroon = 'cameroon', Oman = 'oman', Mexico = 'mexico', Senegal = 'senegal', Togo = 'togo', Djibouti = 'djibouti', India = 'india', Samoa = 'samoa', ElSalvador = 'el-salvador', Armenia = 'armenia', Brazil = 'brazil', BurkinaFaso = 'burkina-faso', Chile = 'chile', Bahamas = 'bahamas', Mauritius = 'mauritius', PapuaNewGuinea = 'papua-new-guinea', Australia = 'australia', Liberia = 'liberia', Romania = 'romania', Ethiopia = 'ethiopia', Guatemala = 'guatemala', Japan = 'japan', Micronesia = 'micronesia', Tunisia = 'tunisia', Singapore = 'singapore', Croatia = 'croatia', Slovakia = 'slovakia', Turkey = 'turkey', Brunei = 'brunei', Egypt = 'egypt', Kenya = 'kenya', Fiji = 'fiji', Kyrgyzstan = 'kyrgyzstan', Belgium = 'belgium', Burundi = 'burundi', Libya = 'libya', Lesotho = 'lesotho', Colombia = 'colombia', EquatorialGuinea = 'equatorial-guinea', SolomonIslands = 'solomon-islands', CoteDIvoire = 'cote-d-ivoire', Malaysia = 'malaysia', Suriname = 'suriname', Tajikistan = 'tajikistan', Thailand = 'thailand', Zambia = 'zambia', Botswana = 'botswana', Eswatini = 'eswatini', Gambia = 'gambia', Cambodia = 'cambodia', Panama = 'panama', Russia = 'russia', UnitedStates = 'united-states', NorthMacedonia = 'north-macedonia', Philippines = 'philippines', Slovenia = 'slovenia', Indonesia = 'indonesia', Albania = 'albania', CongoDemocraticRepublic = 'congo-democratic-republic', Greece = 'greece', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Azerbaijan = 'azerbaijan', Belarus = 'belarus', Georgia = 'georgia', Madagascar = 'madagascar', Bolivia = 'bolivia', Paraguay = 'paraguay', CaboVerde = 'cabo-verde', MarshallIslands = 'marshall-islands', Nepal = 'nepal', SierraLeone = 'sierra-leone', Mauritania = 'mauritania', SriLanka = 'sri-lanka', Somalia = 'somalia', Sudan = 'sudan', TimorLeste = 'timor-leste', Luxembourg = 'luxembourg', Palau = 'palau', Netherlands = 'netherlands', Canada = 'canada', Angola = 'angola', Jamaica = 'jamaica', Kuwait = 'kuwait', Syria = 'syria', Nigeria = 'nigeria', Afghanistan = 'afghanistan', UnitedKingdom = 'united-kingdom', Latvia = 'latvia', SouthSudan = 'south-sudan', NorthKorea = 'north-korea', Italy = 'italy', Myanmar = 'myanmar', Switzerland = 'switzerland', Ecuador = 'ecuador', GuineaBissau = 'guinea-bissau', Honduras = 'honduras', Monaco = 'monaco', Austria = 'austria', Guyana = 'guyana', Bhutan = 'bhutan', Liechtenstein = 'liechtenstein', SanMarino = 'san-marino', Sweden = 'sweden', Vietnam = 'vietnam', Zimbabwe = 'zimbabwe', Mozambique = 'mozambique', Andorra = 'andorra', Poland = 'poland', Belize = 'belize', Haiti = 'haiti', Kazakhstan = 'kazakhstan', Kiribati = 'kiribati', CentralAfricanRepublic = 'central-african-republic', Malta = 'malta', Estonia = 'estonia', Serbia = 'serbia', Comoros = 'comoros', Norway = 'norway', SouthKorea = 'south-korea', Uruguay = 'uruguay', VaticanCity = 'vatican-city', Moldova = 'moldova', DominicanRepublic = 'dominican-republic', Ireland = 'ireland', Cuba = 'cuba', China = 'china', Iran = 'iran', Montenegro = 'montenegro', Spain = 'spain', Finland = 'finland', Lithuania = 'lithuania', Namibia = 'namibia', Malawi = 'malawi', Maldives = 'maldives', Nauru = 'nauru', Peru = 'peru', Taiwan = 'taiwan', Tanzania = 'tanzania', CostaRica = 'costa-rica', Bahrain = 'bahrain', Nicaragua = 'nicaragua', Bulgaria = 'bulgaria', Jordan = 'jordan', Hungary = 'hungary', Israel = 'israel', Rwanda = 'rwanda', SaintLucia = 'saint-lucia', Tuvalu = 'tuvalu' }
export const enum ConversationStatus { Closed = 'closed', Deleted = 'deleted', Snoozed = 'snoozed', Archived = 'archived', Active = 'active' }
export const enum ContentVisibility { Internal = 'internal', Protected = 'protected', Private = 'private', Shared = 'shared', Public = 'public' }
export const enum ContactAddressType { Home = 'home', Other = 'other', Personal = 'personal', Billing = 'billing', Shipping = 'shipping', Work = 'work', Business = 'business', Temporary = 'temporary' }
export const enum CommunicationRole { Guest = 'guest', Service = 'service', User = 'user', Admin = 'admin', Channel = 'channel', Assistant = 'assistant', Bot = 'bot', System = 'system', Moderator = 'moderator', Group = 'group', Owner = 'owner', Member = 'member' }
export const enum CommunicationMethod { Sms = 'sms', PushNotification = 'push-notification', InPerson = 'in-person', InstantMessage = 'instant-message', SocialMedia = 'social-media', VideoCall = 'video-call', Text = 'text', Phone = 'phone', Other = 'other', Email = 'email', Mail = 'mail' }
export const enum ChatType { Group = 'group', Private = 'private', Public = 'public' }
export const enum CardType { UnknownCard = 'unknown-card', Credit = 'credit', Debit = 'debit' }
export const enum CampaignType { SearchEngine = 'search-engine', Display = 'display', SocialMedia = 'social-media', Email = 'email', Other = 'other' }
export const enum CampaignStatus { Planned = 'planned', Active = 'active', Draft = 'draft', Archived = 'archived', Paused = 'paused', Completed = 'completed', Cancelled = 'cancelled', Scheduled = 'scheduled' }
export const enum CallDirection { Outbound = 'outbound', Inbound = 'inbound', Unknown = 'unknown', Conference = 'conference' }
export const enum BillingStatus { Draft = 'draft', Authorised = 'authorised', Paid = 'paid', Voided = 'voided', Pending = 'pending', Deleted = 'deleted', Submitted = 'submitted', PartiallyPaid = 'partially-paid', Unpaid = 'unpaid', Overdue = 'overdue' }
export const enum AvcStatus { Accepted = 'accepted', NotChecked = 'not-checked', Rejected = 'rejected' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer' }
export const enum AiToolChoiceType { None = 'none', Auto = 'auto', Any = 'any', Tool = 'tool' }
export const enum AiRole { Assistant = 'assistant', Tool = 'tool', User = 'user' }
export const enum AiMessagesContentType { ToolUse = 'tool-use', ToolResult = 'tool-result', Text = 'text', Image = 'image' }
export const enum AccountingAccountType { RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityCapitalReserves = 'equity::capital-reserves', ExpenseFinanceCosts = 'expense::finance-costs', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetVehicles = 'asset::vehicles', AssetDevelopmentCosts = 'asset::development-costs', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', Expense = 'expense', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetCapitalWip = 'asset::capital-wip', LiabilityLongTermLiability = 'liability::long-term-liability', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseDistributionCosts = 'expense::distribution-costs', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetGoodwill = 'asset::goodwill', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', Asset = 'asset', RevenueSalesWholesale = 'revenue::sales-wholesale', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', EquityRetainedEarnings = 'equity::retained-earnings', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseInsurance = 'expense::insurance', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseTravelMeals = 'expense::travel-meals', AssetDepletableAssets = 'asset::depletable-assets', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', LiabilityBankLoans = 'liability::bank-loans', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseExternalServices = 'expense::external-services', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseStaffCosts = 'expense::staff-costs', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', EquityTreasuryStock = 'equity::treasury-stock', ExpenseOtherExternalServices = 'expense::other-external-services', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetFixedAssetComputers = 'asset::fixed-asset-computers', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseBadDebts = 'expense::bad-debts', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityPersonalExpense = 'equity::personal-expense', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherCurrentLiability = 'other-current-liability', ExpenseAuto = 'expense::auto', AssetOtherFixedAssets = 'asset::other-fixed-assets', EquityPartnerContributions = 'equity::partner-contributions', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', CostOfGoodsSold = 'cost-of-goods-sold', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetCashOnHand = 'asset::cash-on-hand', AssetDeferredTax = 'asset::deferred-tax', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetIntangibleAssets = 'asset::intangible-assets', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseEntertainment = 'expense::entertainment', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetLicenses = 'asset::licenses', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetFixedAsset = 'asset::fixed-asset', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetNonCurrentAssets = 'asset::non-current-assets', OtherExpenseMatCredit = 'other-expense::mat-credit', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetUndepositedFunds = 'asset::undeposited-funds', AssetChecking = 'asset::checking', OtherIncome = 'other-income', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', LiabilityCreditCard = 'liability::credit-card', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseTaxesPaid = 'expense::taxes-paid', AssetLand = 'asset::land', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpense = 'other-expense', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetInvestments = 'asset::investments', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityOwnersEquity = 'equity::owners-equity', EquityPreferredStock = 'equity::preferred-stock', AssetOtherConsumables = 'asset::other-consumables', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetOtherAsset = 'asset::other-asset', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetLongTermInvestments = 'asset::long-term-investments', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetTrustAccounts = 'asset::trust-accounts', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherExpenseDepreciation = 'other-expense::depreciation', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', RevenueServiceFeeIncome = 'revenue::service-fee-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseInterestPaid = 'expense::interest-paid', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetBuildings = 'asset::buildings', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityCommonStock = 'equity::common-stock', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherExpenseDepletion = 'other-expense::depletion', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', LiabilityAccountsPayable = 'liability::accounts-payable', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityPersonalIncome = 'equity::personal-income', AssetMoneyMarket = 'asset::money-market', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', RevenueOperatingGrants = 'revenue::operating-grants', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetParticipatingInterests = 'asset::participating-interests', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetInventory = 'asset::inventory', AssetLandAsset = 'asset::land-asset', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseEquipmentRental = 'expense::equipment-rental', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', Equity = 'equity', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', EquityHealthcare = 'equity::healthcare', OtherExpenseUtilities = 'other-expense::utilities', AssetInvestmentOther = 'asset::investment-other', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', LiabilityLongTermDebit = 'liability::long-term-debit', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetRetainage = 'asset::retainage', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetSecurityDeposits = 'asset::security-deposits', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseBankCharges = 'expense::bank-charges', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetBank = 'asset::bank', EquityFunds = 'equity::funds', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', RevenueRevenueGeneral = 'revenue::revenue-general', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', EquityPartnersEquity = 'equity::partners-equity', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseSundry = 'expense::sundry', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseTravel = 'expense::travel', AssetInternalTransfers = 'asset::internal-transfers', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseManagementCompensation = 'expense::management-compensation', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', RevenueSalesRetail = 'revenue::sales-retail', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseUtilities = 'expense::utilities', AssetSavings = 'asset::savings', AssetLoansToOthers = 'asset::loans-to-others', RevenueIncome = 'revenue::income', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances' }
export const enum AccountStatus { Active = 'active', Closed = 'closed', Pending = 'pending', Suspended = 'suspended', Inactive = 'inactive' }
export const enum AccountEngagementLevel { Hot = 'hot', Cold = 'cold', Warm = 'warm', Unknown = 'unknown' }
export const enum AccessControlModel { Abac = 'abac', Custom = 'custom', Dac = 'dac', None = 'none', Rbac = 'rbac', Mac = 'mac' }

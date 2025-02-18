namespace TimeCapsuleX.Common.Core;

public class BusinessRuleValidationException(string message) : InvalidOperationException(message)
{
}

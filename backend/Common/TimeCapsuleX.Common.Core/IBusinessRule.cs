namespace TimeCapsuleX.Common.Core;

public interface IBusinessRule
{
    bool IsMet();
    string Error { get; }
}
